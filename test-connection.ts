import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load .env
dotenv.config();

async function testConnection() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error('❌ MONGODB_URI is not defined in .env');
    process.exit(1);
  }

  console.log('🔄 Attempting to connect to MongoDB Atlas...');

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log('✅ Connection Successful!');
    console.log(`📌 Connected to Host: ${conn.connection.host}`);
    console.log(`📂 Database Name: ${conn.connection.name}`);
    console.log(`⚡ Connection State: ${conn.connection.readyState === 1 ? 'Connected (Ready)' : conn.connection.readyState}`);

    // Perform a ping command to verify read/write connectivity
    if (conn.connection.db) {
      const pingResult = await conn.connection.db.admin().ping();
      console.log('📡 Atlas Ping Result:', pingResult);
    }

    await mongoose.disconnect();
    console.log('🔌 Test completed and disconnected safely.');
  } catch (error) {
    console.error('❌ Connection Failed with error:');
    console.error(error);
    process.exit(1);
  }
}

testConnection();
