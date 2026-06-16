import jwt from "jsonwebtoken";
import { randomUUID } from "node:crypto";

const privateKey = "PRIVATE KEY";

const publicKey = "PUBLIC KEY";

export interface AccessTokenPayload {
  sub: string;
  email: string;
  name: string;
  global_role: "SUPER_ADMIN" | "COMPANY_ADMIN" | "MEMBER";
  company_id: string | null;
  password_version: number;
  jti: string;
}

export interface RefreshTokenPayload {
  sub: string;
  type: "refresh";
  password_version: number;
  jti: string;
}


  const signAccessToken=(payload: Omit<AccessTokenPayload, "jti">): string=> {
    const jti = crypto.randomUUID();
    return jwt.sign({ ...payload, jti }, privateKey, {
      algorithm: "RS256",
      expiresIn: "15m",
      issuer: "trello-platform",
      subject: payload.sub,
    });
  }

  const signRefreshToken=(userId: string, password_version: number): string=> {
    const jti = randomUUID();
    return jwt.sign(
      {
        sub: userId,
        type: "refresh",
        password_version: password_version,
        jti,
      },
      privateKey,
      {
        algorithm: "RS256",
        expiresIn: "7d",
        issuer: "trello-platform",
        subject: userId,
      },
    );
  }

  const verifyAccessToken=(token:string):AccessTokenPayload=>{
    return jwt.verify(token,publicKey,{
        algorithms:["RS256"],
        issuer:"trello-platform"
    }) as AccessTokenPayload
  }

  const verifyRefreshToken=(token:string):RefreshTokenPayload=>{
    return jwt.verify(token,publicKey,{
        algorithms:["RS256"],
        issuer:"trello-platform"
    }) as RefreshTokenPayload
  }

  const decode=(token:string)=>{
    return jwt.decode(token)
  }

  const extractJti=(token:string):string|null=>{
    const decoded = jwt.decode(token) as AccessTokenPayload | RefreshTokenPayload ;
    return decoded?.jti || null
  }



export default{
  signAccessToken,signRefreshToken,verifyAccessToken,verifyRefreshToken,decode,extractJti
}