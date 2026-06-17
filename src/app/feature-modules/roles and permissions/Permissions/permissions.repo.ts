import { PermissionSchema } from "./permission.schema.js"



const findOne = (findOptions:any)=>PermissionSchema.findOne({where:findOptions})

const findAll = (findOptions:any)=>PermissionSchema.findAll({where:findOptions})

const create = (createOptions:any)=>PermissionSchema.create(createOptions)

const deleteAll=(deleteOptions:any)=>PermissionSchema.destroy(deleteOptions)

const update = (findOptions:any,UpdateData:any)=>PermissionSchema.update(UpdateData,findOptions)


export default{
    findOne,findAll,create,deleteAll,update
}