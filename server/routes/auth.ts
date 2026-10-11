import bcrypt from 'bcryptjs';
import { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'indus_secret_jwt_key_2026';

// POST /api/auth/login
router.post('/login', async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ success: false, message: 'Please provide both username and password.' });
      return;
    }

    const cleanUser = String(username).trim();
    const cleanPass = String(password).trim();

    // Check MongoDB for user by username or operatorNodeId
    const user = await User.findOne({
      $or: [
        { username: cleanUser.toLowerCase() },
        { operatorNodeId: cleanUser },
        { operatorNodeId: new RegExp(`^${cleanUser}$`, 'i') },
      ],
    });

    if (!user) {
      // Special admin bypass for 'abcd' if needed
      if (cleanUser === 'abcd') {
        const adminToken = jwt.sign(
          { id: 'admin_special', username: 'abcd', role: 'admin' },
          JWT_SECRET,
          { expiresIn: '7d' }
        );
        res.json({
          success: true,
          token: adminToken,
          user: {
            id: 'admin_special',
            username: 'abcd',
            name: 'System Administrator',
            operatorNodeId: 'ADMIN-NODE-001',
            role: 'admin',
            activeTier: 'tier1',
          },
        });
        return;
      }

      res.status(401).json({
        success: false,
        message: 'Authentication mismatch: Invalid username or operator ID detected in MongoDB records.',
      });
      return;
    }

    // Verify Password (supports bcrypt hashed or plain match)
    let isMatch = false;
    if (user.password.startsWith('$2a$') || user.password.startsWith('$2b$')) {
      isMatch = await bcrypt.compare(cleanPass, user.password);
    } else {
      isMatch = user.password === cleanPass;
    }

    if (!isMatch) {
      res.status(401).json({
        success: false,
        message: 'Authentication mismatch: Invalid password sequence detected.',
      });
      return;
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        name: user.name,
        operatorNodeId: user.operatorNodeId,
        role: user.role,
        phone: user.phone,
        dob: user.dob,
        nationalId: user.nationalId,
        ckyc: user.ckyc,
        nominee: user.nominee,
        address: user.address,
        activeTier: user.activeTier,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error during authentication.' });
  }
});

// POST /api/auth/register
router.post('/register', async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password, name, phone, operatorNodeId } = req.body;

    if (!username || !password) {
      res.status(400).json({ success: false, message: 'Username and password are required.' });
      return;
    }

    const cleanUser = String(username).trim().toLowerCase();
    const existing = await User.findOne({ username: cleanUser });

    if (existing) {
      res.status(400).json({ success: false, message: 'A user with this username already exists in MongoDB.' });
      return;
    }

    const hashedPassword = await bcrypt.hash(String(password).trim(), 10);
    const newUser = new User({
      username: cleanUser,
      password: hashedPassword,
      name: name || 'Milan Biswas',
      phone: phone || '9339492781',
      operatorNodeId: operatorNodeId || 'Indus@Milan@2026',
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: 'User registered successfully in MongoDB Atlas!',
      user: {
        id: newUser._id,
        username: newUser.username,
        name: newUser.name,
        operatorNodeId: newUser.operatorNodeId,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'Server error during registration.' });
  }
});

// GET /api/auth/me
router.get('/me', async (req: Request, res: Response): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ success: false, message: 'No authorization token provided.' });
      return;
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      res.status(404).json({ success: false, message: 'User not found in MongoDB.' });
      return;
    }

    res.json({ success: true, user });
  } catch {
    res.status(401).json({ success: false, message: 'Invalid or expired authentication token.' });
  }
});

export default router;
