import {Redis} from '@upstash/redis';

interface IRedisConfig {
    url: string;
    token: string;
    }

export const db = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

