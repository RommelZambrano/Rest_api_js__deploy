import { config } from "dotenv";
config();
export default {
    mongodbURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/Local',
};