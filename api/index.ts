import app from '../server/app.js';
import { connectDB } from '../server/config/db.js';
import { seedDefaultUser } from '../server/seedUser.js';

let isReady = false;

async function ensureDB() {
  if (!isReady) {
    await connectDB();
    await seedDefaultUser();
    isReady = true;
  }
}

export default async function handler(req: any, res: any) {
  try {
    await ensureDB();
  } catch (err) {
    console.error('Database connection error in Vercel function:', err);
  }
  return app(req, res);
}
