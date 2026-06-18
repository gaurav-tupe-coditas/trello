import { SendMessageCommand } from "@aws-sdk/client-sqs";

import { sqsClient } from "../connections/sqs.connection.js";

import { env } from "./validate-env.js";
export const sendToSQS = async (messageBody: any) => {
  try {
    const command = new SendMessageCommand({
      QueueUrl: env.SQS_QUEUEURL,
      MessageBody: JSON.stringify(messageBody)
    });

    await sqsClient.send(command);
    
  } catch(err) {
    throw err;
  }
}