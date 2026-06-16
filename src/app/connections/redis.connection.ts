import { createClient } from 'redis';
import { env } from '../utils/validate-env.js';

const redisRecord = createClient({
    username: 'default',
    password: env.REDIS_PASSWORD,
    socket: {
        host: 'wish-appreciative-stream-24552.db.redis.io',
        port: 12764
    }
});

redisRecord.on('error', err => console.log('Redis Client Error', err));

await redisRecord.connect();

await redisRecord.set('foo', 'Redis is working');
const result = await redisRecord.get('foo');
console.log(result)  // >>> bar

export default redisRecord

