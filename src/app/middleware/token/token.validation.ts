import type { NextFunction, Request, Response } from "express";
import userService from "../../feature-modules/users/user.service.js";
import jwtService from "./jwt.service.js";
import type { userLocalData } from "./token.types.js";

declare global{
    namespace Express{
        interface Request{
            user:userLocalData
        }
    }
}


export const tokenValidation = async(req:Request,res:Response,next:NextFunction)=>{
try {
   let accessToken = req.cookies["accessToken"]

   if(!accessToken && req.headers.authorization?.startsWith("Bearer ")){
    accessToken = req.headers.authorization.split(" ")[1]
   }
   if(!accessToken)throw "No Authentication token provided"

   const refreshToken = req.cookies["refreshToken"] 


   const userpayload = jwtService.verifyAccessToken(accessToken)

   const user = await userService.findOneUser({id:userpayload.userId});

   if(!user || userpayload.password_version!=user.password_version){
    const RefreshTokenPayload= jwtService.verifyRefreshToken(refreshToken)
    const newAccessToken = jwtService.signAccessToken(userpayload)
    res.clearCookie("accessToken")
    res.cookie("accessToken",newAccessToken)
   }

   req.user = userpayload   
   next()

} catch (error) {
    throw error
}
}