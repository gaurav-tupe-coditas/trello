import { json } from "express";
import helmet from "helmet";
import { ROUTES } from "./routes.data.js";
import { ResponseHandler } from "./utilites/response-handler.js";
export const registerMiddlewares = (app)=>{
    app.use(helmet());
    app.use(json());
    for (const route of ROUTES){
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next)=>{
        res.status(err.statusCode || 500).send(new ResponseHandler(null, err.message));
    });
};

//# sourceMappingURL=routes.js.map