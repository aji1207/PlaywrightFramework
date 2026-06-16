import dotenv from 'dotenv';

dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL || '',
  username: process.env.SAUCE_USERNAME || '',
  password: process.env.SAUCE_PASSWORD || ''
};