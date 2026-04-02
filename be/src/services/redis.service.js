import redis from 'ioredis';
import { redisEnv } from '../config/env.js';

let Redis;

export const connectRedis = () => {
    if (!Redis) {
        Redis = new redis(redisEnv.url);
    }
    return Redis;
}