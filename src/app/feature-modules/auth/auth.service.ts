import jwtService from "../../middleware/token/jwt.service.js";
import { logOTPEmailContent } from "../../utils/logger.js";
import otpService from "../../utils/otp.service.js";
import { publishOtpEmail } from "../../utils/sqs.queue.js";
import userService from "../users/user.service.js";

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    name: string;
    global_role: string;
    company_id: string | null;
  };
}

const requestOTP = async (email: string) => {
  try {
    email = email.toLowerCase().trim();
    const user = await userService.findOneUser({ email });
    if (!user) return;
    const otp = otpService.generate();

    await otpService.store(email, otp, 600);

    // publishOtpEmail(email, otp);
    
    await logOTPEmailContent(email, otp);
    return "Email sent";
  } catch (error) {
    throw error;
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
      throw new Error("Invalid or expired OTP");
    }
    let user = await userService.findOneUser({ email });
    if (!user) {
      throw new Error("Failed to retrieve or create user");
    }

    if (user.is_archived) {
      throw new Error("Account is disabled");
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
  } catch (error) {
    throw error;
  }
};

export default {
  requestOTP,
  verifyOTP,
};
