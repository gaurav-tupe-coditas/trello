import { UserRolesSchema } from "./userroles.schema.js"


const findOne = (findOptions:any)=>UserRolesSchema.findOne({where:findOptions})

const findAll = (findOptions:any)=>UserRolesSchema.findAll({where:findOptions})

const create = (createOptions:any)=>UserRolesSchema.create(createOptions)

const deleteAll=(deleteOptions:any)=>UserRolesSchema.destroy(deleteOptions)

const update = (findOptions:any,UpdateData:any)=>UserRolesSchema.update(UpdateData,findOptions)


export default{
    findOne,findAll,create,deleteAll,update
}