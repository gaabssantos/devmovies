import mongoose from 'mongoose';
import 'dotenv/config';

export const connectDatabase = async () => {
  mongoose.set('strictQuery', true);

  const apiKey = process.env.MONGO_URL;

  return await mongoose.connect(apiKey);
};
