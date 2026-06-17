import { RoleSchema } from "./roles.schema.js";

const findOne = (findOptions:any)=>RoleSchema.findOne({where:findOptions})

const findAll = (findOptions:any)=>RoleSchema.findAll({where:findOptions})

const create = (createOptions:any)=>RoleSchema.create(createOptions)

const deleteAll=(deleteOptions:any)=>RoleSchema.destroy(deleteOptions)

const update = (findOptions:any,UpdateData:any)=>RoleSchema.update(UpdateData,findOptions)


export default{
    findOne,findAll,create,deleteAll,update
}