import type { NextFunction, Request, Response } from "express";
import { ZodError, ZodObject } from "zod";
import { ResponseHandler } from "./response-handler.js";

const check =
  (type: "body" | "params" | "query") =>
  (schema: ZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      req[type] = schema.parse(req[type]);

      next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).json(
          new ResponseHandler(null, {
            message: "Validation Error",
            details: error.issues,
          }),
        );
        return;
      }
      next(error);
    }
  };

export const body = check("body");
export const query = check("query");
export const params = check("params");
