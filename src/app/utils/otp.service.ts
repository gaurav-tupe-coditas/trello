import { raw } from "express";
import  otpStore from "../connections/redis.connection.js";


export interface OTPRecord{
    otp:string,
    email:string,
    createdAt:Date,
    attempts:number;
}



 const generate = ()=>Math.floor(100000+Math.random() * 900000).toString()



const store = async(email:string,otp:string,ttlSeconds:number=600)=>{
    try {
        const record:OTPRecord = {
            otp,
            email,
            createdAt:new Date(),
            attempts:0
        }
        await otpStore.set(`otp:${email}`,JSON.stringify(record),{
            expiration:{
                type:"EX",
                value:ttlSeconds
            }
        });

    } catch (error) {
        console.log( "failure to add value to otpStore");
        throw (error)
    }
}

const verify = async(email:string,providedOTP:string)=>{
    try {
        const cachedData =   await otpStore.get(`otp:${email}`)
        const record :OTPRecord|null = cachedData ? JSON.parse(cachedData) : null
        if(!record){
            return false;
        }
        record.attempts++;  

        if(record.attempts>=3){
            await otpStore.del(`otp:${email}`);
            return false;
        }

        const isValid = record.otp  === providedOTP

        if(isValid){
           await otpStore.del(`otp:${email}`)
        }

        return isValid

    } catch (error) {
        console.log( "Failure to get otp value from otpStore")
        throw error
    }
}


const inValidate=async(email:string) =>{
   try {
    await otpStore.del(`otp:${email}`)
   } catch (error) {
    console.error("Failure to delete otp value from otpStore",error);
    throw error
   }
} 

export default {
    generate,store,verify,inValidate
}