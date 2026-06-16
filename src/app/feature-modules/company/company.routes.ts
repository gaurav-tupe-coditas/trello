import { Router } from "express";
import companyService from "./company.service.js";
import { Route } from "../../routes/routes.types.js";

const router = Router()

router.post("/create",async(req,res,next)=>{
    try {
        const data = req.body
        const result = await companyService.createCompany(data)

        res.status(200).send(result)
    } catch (error) {
        throw error
    }
})


router.get("/:id",async(req,res,next)=>{
    try {
        const id = req.params.id
        const result = await companyService.getCompanyById(id)
        res.status(200).send(result)
    } catch (error) {
        throw error
    }
})



export default new Route("/compnay",router)