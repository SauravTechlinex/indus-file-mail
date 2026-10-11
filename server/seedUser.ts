import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { User } from './models/User.js';

dotenv.config();

export async function seedDefaultUser(): Promise<void> {
  const uri = process.env.MONGODB_URI;
  if (!uri) return;

  try {
    const isConnected = mongoose.connection.readyState === 1;
    if (!isConnected) {
      await mongoose.connect(uri);
    }

    const defaultUsername = 'indus@milan@2026';
    const existing = await User.findOne({ username: defaultUsername });

    if (!existing) {
      console.log('🌱 Seeding default operator (Milan Biswas) into MongoDB Atlas...');
      const hashedPassword = await bcrypt.hash('9339492781', 10);

      await User.create({
        username: defaultUsername,
        password: hashedPassword,
        name: 'Milan Biswas',
        operatorNodeId: 'Indus@Milan@2026',
        role: 'operator',
        phone: '9339492781',
        dob: '02/01/1984',
        nationalId: 'Aadhaar / Passport (**** 1162)',
        ckyc: '7998643-233976',
        nominee: 'Usha Rani Biswas (Mother)',
        address: 'Bagangram North 24 Parganas, West Bengal, PIN: 743251',
        activeTier: 'tier3',
      });

      console.log('✅ Default operator (Milan Biswas) successfully seeded into MongoDB Atlas!');
    } else {
      console.log('ℹ️ Default operator (Milan Biswas) already exists in MongoDB Atlas.');
    }
  } catch (err) {
    console.error('Error seeding user:', err);
  }
}

// If executed directly:
if (process.argv[1]?.endsWith('seedUser.ts') || process.argv[1]?.endsWith('seedUser.js')) {
  seedDefaultUser().then(() => {
    mongoose.disconnect();
  });
}
