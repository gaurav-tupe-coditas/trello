import otpService from "../../utils/otp.service.js";
import userService from "../users/user.service.js";

const requestOTP = async (email: string) => {
  try {
    email = email.toLowerCase().trim();
    const user = userService.findUser(email)
    if(!user)return
    const otp = otpService.generate();

    await otpService.store(email, otp, 600);

    console.log(`\n========================================`);
    console.log(`[MOCK EMAIL SES] Sent to: ${email}`);
    console.log(`[MOCK EMAIL SES] OTP Code: ${otp}`);
    console.log(`========================================\n`);
  } catch (error) {
    
  }
};


export default{
    requestOTP
}