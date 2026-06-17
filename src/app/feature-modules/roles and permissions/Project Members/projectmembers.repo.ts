import { ProjectMembersSchema } from "./projectmembers.schema.js"


const findOne = (findOptions:any)=>ProjectMembersSchema.findOne({where:findOptions})

const findAll = (findOptions:any)=>ProjectMembersSchema.findAll({where:findOptions})

const create = (createOptions:any)=>ProjectMembersSchema.create(createOptions)

const deleteAll=(deleteOptions:any)=>ProjectMembersSchema.destroy(deleteOptions)

const update = (findOptions:any,UpdateData:any)=>ProjectMembersSchema.update(UpdateData,findOptions)


export default{
    findOne,findAll,create,deleteAll,update
}