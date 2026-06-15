import { Router } from "express";
import { ResponseHandler } from "../../utils/response-handler.js";
import authService from "./auth.service.js";

const router = Router();

router.post("/request-otp", async (req, res, next) => {
    try {
        const {email}= req.body;
        const result = await authService.requestOTP(email);
        res.status(200).send(new ResponseHandler(result))
    } catch (error) {
        next(error);
    }
});

router.post("/verify-otp", (req, res, next) => {});
