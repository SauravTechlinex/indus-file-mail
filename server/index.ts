import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './config/db.js';
import { seedDefaultUser } from './seedUser.js';

dotenv.config();

const PORT = process.env.PORT || 5001;

// Start server (for local development)
async function startServer() {
  try {
    await connectDB();
    await seedDefaultUser();

    app.listen(PORT, () => {
      console.log(`🚀 Indus Backend API Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
