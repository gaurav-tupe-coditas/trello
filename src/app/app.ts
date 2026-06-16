import express from "express";
import { registerMiddlewares } from "./routes/routes.js";
export const StartServer = () => {
  try {
    const app = express();
    
    registerMiddlewares(app);
    app.listen(8000, () => console.log("App is listening on port 8000"));
  } catch (error) {
    console.log(error);
    process.nextTick(() => process.exit(1));
  }
};
