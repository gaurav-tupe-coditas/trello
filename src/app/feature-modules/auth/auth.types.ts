export enum AuthErrorType {
  INVALID_TOKEN = "INVALID_TOKEN",
  TOKEN_EXPIRED = "TOKEN_EXPIRED",
  INVALID_OTP = "INVALID_OTP",
  OTP_EXPIRED = "OTP_EXPIRED",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  PERMISSION_DENIED = "PERMISSION_DENIED",
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  ACCOUNT_LOCKED = "ACCOUNT_LOCKED",
  PASSWORD_MISMATCH = "PASSWORD_MISMATCH",
}

export class AuthError extends Error {
  constructor(
    public type: AuthErrorType,
    public statusCode: number,
    message: string,
  ) {
    super(message);
    this.name = "AuthError";
  }
}


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