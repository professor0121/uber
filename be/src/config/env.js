import dotenv from 'dotenv';
import path from 'path';

// Load .env file
dotenv.config();

/**
 * Helper to ensure we don't start the app with missing critical secrets
 */
const getRequiredEnv = (key) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`❌ Missing critical environment variable: ${key}`);
  }
  return value;
};

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  
  dbEnv: {
    url: getRequiredEnv('DATABASE_URL'),
  },
  
  redisEnv: {
    url: getRequiredEnv('REDIS_URL'),
  },
  
  rabbitmqEnv: {
    url: getRequiredEnv('RABBITMQ_URL'),
    managementUrl: process.env.RABBITMQ_MANAGEMENT_URL || '',
  },
  
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
};

// Export individual constants if preferred, though 'config' object is cleaner
export const { PORT, dbEnv, redisEnv, rabbitmqEnv,port } = config;