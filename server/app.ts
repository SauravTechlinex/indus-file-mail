import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import authRoutes from './routes/auth.js';

dotenv.config();

export const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes - support both /api/auth and /auth
app.use('/api/auth', authRoutes);
app.use('/auth', authRoutes);

// Health check endpoints
const healthHandler = (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'Indus Limited Backend API',
    database: 'MongoDB Atlas',
    timestamp: new Date().toISOString(),
  });
};

app.get('/api/health', healthHandler);
app.get('/health', healthHandler);

export default app;
