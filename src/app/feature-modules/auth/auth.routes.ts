import { Router } from "express";
import { ResponseHandler } from "../../utils/response-handler.js";
import authService from "./auth.service.js";
import { Route } from "../../routes/routes.types.js";
import { env } from "../../utils/validate-env.js";

const router = Router();

router.post("/request-otp", async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log(env)
    const result = await authService.requestOTP(email);

    res.status(200).send(new ResponseHandler(result));
  } catch (error) {
    next(error);
  }
});

router.post("/verify-otp", async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    const { accessToken, refreshToken, user } = await authService.verifyOTP(
      email,
      otp,
    );
    res
      .status(200)
      .cookie("accessToken", accessToken)
      .cookie("refreshToken", refreshToken)
      .send(new ResponseHandler(user));
  } catch (error) {
    next(error);
  }
});

router.post("/test", (req, res) => {
  res.send("working");
});

export default new Route("/auth", router);
