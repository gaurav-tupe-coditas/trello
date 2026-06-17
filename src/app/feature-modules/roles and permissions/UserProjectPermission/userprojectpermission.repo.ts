import { UserProjectPermissionSchema } from "./userprojectpermission.schema.js"


const findOne = (findOptions:any)=>UserProjectPermissionSchema.findOne({where:findOptions})

const findAll = (findOptions:any)=>UserProjectPermissionSchema.findAll({where:findOptions})

const create = (createOptions:any)=>UserProjectPermissionSchema.create(createOptions)

const deleteAll=(deleteOptions:any)=>UserProjectPermissionSchema.destroy(deleteOptions)

const update = (findOptions:any,UpdateData:any)=>UserProjectPermissionSchema.update(UpdateData,findOptions)


export default{
    findOne,findAll,create,deleteAll,update
}