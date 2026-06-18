import { zstdCompress } from "node:zlib";
import z from "zod";


const keySchema = z.string().transform((val) => val.replace(/\\n/g, "\n"));


const envSchema = z.object({
    PORT: z.coerce.number("PORT MUST BE A NUMERIC VALUE"),
    DB_NAME: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    SECRET_KEY:z.string(),
    AMAZON_ACCESSKEYID:z.string(),
    AMAZON_SECRETACCESSKEY:z.string(),
    SQS_QUEUEURL:z.string(),
    REDIS_PASSWORD:z.string(),
    AWS_REGION:z.string(),
    TEST_SEND_EMAIL:z.email(),
    PRIVATE_KEY:keySchema,
    PUBLIC_KEY:keySchema
});

export const env = envSchema.parse(process.env);