import { RolePermissionsSchmea } from "./rolepermissions.schema.js"


const findOne = (findOptions:any)=>RolePermissionsSchmea.findOne({where:findOptions})

const findAll = (findOptions:any)=>RolePermissionsSchmea.findAll({where:findOptions})

const create = (createOptions:any)=>RolePermissionsSchmea.create(createOptions)

const deleteAll=(deleteOptions:any)=>RolePermissionsSchmea.destroy(deleteOptions)

const update = (findOptions:any,UpdateData:any)=>RolePermissionsSchmea.update(UpdateData,findOptions)


export default{
    findOne,findAll,create,deleteAll,update
}