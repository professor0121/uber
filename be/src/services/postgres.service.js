import pkg from 'pg';
import { dbEnv } from '../config/env.js';

const { Pool } = pkg;

let pool;

export const connectDB = () => {
    if (!pool) {
        pool = new Pool({ connectionString: dbEnv.url, max: 10 });
    }
    return pool;
}