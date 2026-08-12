import Redis from "ioredis";

let redis: Redis | null = null;

if (process.env.REDIS_HOST && process.env.REDIS_PORT) {
  redis = new Redis({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD || undefined,
  });

  redis.on("connect", () => console.log("✅ Connected to Redis"));
  redis.on("error", (err) => console.error("❌ Redis error:", err));
}

export default redis;
