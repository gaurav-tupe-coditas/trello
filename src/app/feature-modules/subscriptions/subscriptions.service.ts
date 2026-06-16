import { where } from "sequelize"
import subscriptionsRepo from "./subscriptions.repo.js"

const findOne = async(data:any)=>{
    return await subscriptionsRepo.findOne({where:{data}})
}

const findAll = async(data:any)=>{
    return await subscriptionsRepo.findAll({where:{data}})
}

const createOne = async(data:any)=>{
    return await subscriptionsRepo.create({where:{data}})
}


export default{
    findAll,findOne,createOne
}