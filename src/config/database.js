const mysql = require('mysql2/promise');

let connection;

const connectDB = async () => {
  try {
    connection = await mysql.createConnection(process.env.DATABASE_URL);
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

const getDB = () => {
  if (!connection) {
    throw new Error("Database belum connect!");
  }
  return connection;
};

const testConnection = async () => {
  await connectDB();
};

module.exports = {
  connectDB,
  testConnection,
  getDB
};