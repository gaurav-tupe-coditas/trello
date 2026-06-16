import { SendMessageCommand } from "@aws-sdk/client-sqs";

import { sqsClient } from "../connections/sqs.connection.js";
import { env } from "./validate-env.js";

export const publishOtpEmail = async (email: string, otp: string) => {
  try {
    await sqsClient.send(
      new SendMessageCommand({
        QueueUrl: env.SQS_QUEUEURL,
        MessageBody: JSON.stringify({ type: "OTP", email, otp }),
      }),
    );
  } catch (error) {
    throw error;
  }
};
