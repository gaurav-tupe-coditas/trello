import { SendMessageCommand } from "@aws-sdk/client-sqs";

import { sqsClient } from "../connections/sqs.connection.js";

import { env } from "./validate-env.js";

export const publishOtpEmail = async (email: string, otp: string) => {
  try {
    const response = await sqsClient.send(
      new SendMessageCommand({
        QueueUrl: env.SQS_QUEUEURL, 

        MessageBody: JSON.stringify({
          sender_email: "gaurav.tupe@coditas.com", 

          to_email: email, 
          subject: "Your Login OTP", 
          message: `Your OTP is: ${otp}`, 
        }),
      }),
    );

    return response;
  } catch (error) {
    throw error;
  }
};
