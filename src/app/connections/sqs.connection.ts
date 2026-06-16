

import { SQSClient } from "@aws-sdk/client-sqs";
import { env } from "../utils/validate-env.js";



export const sqsClient = new SQSClient({
    region: "ap-south-1",
    credentials: {
        accessKeyId: env.AMAZON_ACCESSKEYID,
        secretAccessKey:
            env.AMAZON_SECRETACCESSKEY
          }
});

