import {
  json,
  type Application,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import helmet from "helmet";
import { ROUTES } from "./routes.data.js";
import { ResponseHandler } from "./utilites/response-handler.js";

export const registerMiddlewares = (app: Application) => {
  app.use(helmet());
  app.use(json());

  for(const route of ROUTES){
    app.use(route.path,route.router)
  }
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res
      .status(err.statusCode || 500)
      .send(new ResponseHandler(null, err.message));
  });
};
