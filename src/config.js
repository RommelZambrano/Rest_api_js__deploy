import { config } from "dotenv";
config();


module.exports = {
  mongodbURI: process.env.MONGODB_URI,
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT
}

