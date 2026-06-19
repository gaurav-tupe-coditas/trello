import jwtService from "../../middleware/token/jwt.service.js";
import { logOTPEmailContent } from "../../utils/logger.js";
import otpService from "../../utils/otp.service.js";
import { sendToSQS } from "../../utils/sqs.queue.js";
import { env } from "../../utils/validate-env.js";
import userService from "../users/user.service.js";
import { AuthError, AuthErrorType, type AuthResponse } from "./auth.types.js";



const requestOTP = async (email: string):Promise<string> => {
  try {
    email = email.toLowerCase().trim();
    const user = await userService.findOneUser({ email });
    if (!user) return "Email Sent";
    const otp = otpService.generate();

    await otpService.store(email, otp, 600);

    await sendToSQS({to_email:email,sender_email:env.TEST_SEND_EMAIL,subject:"Login OTP",message:`Your OTP for login is ${otp}`})
    
    await logOTPEmailContent(email, otp); //For testing purposes
    return "Email Sent";
  } catch (error:any) {
   if (error instanceof AuthError) throw error;

    throw new AuthError(
        AuthErrorType.INVALID_CREDENTIALS,
        400,
        `Failed to request OTP: ${error.message}`,
      );
  }
};

const verifyOTP = async (
  email: string,
  providedOTP: string,
): Promise<AuthResponse> => {
  try {
    email = email.toLowerCase().trim();

    const isValid = await otpService.verify(email, providedOTP);

    if (!isValid) {
      throw new AuthError(AuthErrorType.INVALID_OTP,401,"INVALID OR EXPIRED OTP")
    }
    let user = await userService.findOneUser({ email });
    if (!user) {
      throw new AuthError(AuthErrorType.USER_NOT_FOUND,404,"USER NOT FOUND")
    }

    if (user.is_archived) {
      throw new AuthError(AuthErrorType.ACCOUNT_LOCKED,403,"Account is Disabled")
    }
  

    const accessToken = jwtService.signAccessToken({
      userId: user.id,
      email: user.email,
      name: user.name,
      global_role: user.global_role,
      company_id: user.company_id,
      password_version: user.password_version,
    });

    const refreshToken = jwtService.signRefreshToken(
      user.id,
      user.password_version,
    );

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        global_role: user.global_role,
        company_id: user.company_id,
      },
    };
  } catch (error:any) {
     if (error instanceof AuthError) throw error;

      throw new AuthError(
        AuthErrorType.INVALID_CREDENTIALS,
        400,
        `Authentication failed: ${error.message}`,
      );
  }
};

export default {
  requestOTP,
  verifyOTP,
};
