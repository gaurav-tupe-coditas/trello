import { Router } from "express";
import userService from "./user.service.js";

const router = Router()


router.post("/create",async(req,res,next)=>{
    try {
        const result = await userService.createUser(req.body)
       res.send(result)
    } catch (error) {
        throw error
    }
})

router.post("/find",async(req,res,next)=>{
try {
    const result = await userService.findOneUser(req.body)
    res.send(result)
} catch (error) {
    throw error
}
})

router.post("/findAll",async(req,res,next)=>{
try {
    const result = await userService.findOneUser(req.body)
    res.send(result)
} catch (error) {
    throw error
}
})


