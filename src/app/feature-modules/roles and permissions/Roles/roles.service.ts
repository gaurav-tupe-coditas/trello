import rolepermissionsRepo from "../rolepermissions/rolepermissions.repo.js"


export const createRole = async(roledata:any)=>{
    try {
        const result = await rolepermissionsRepo.create(roledata)
        return result
    } catch (error) {
        
    }
}

export const getRole = async(roledata:any)=>{
    try {
        const result = await rolepermissionsRepo.findOne(roledata)
        return result
    } catch (error) {
        
    }
}


export const deleteRole = async(roledata:any)=>{
    try {
        const result = await rolepermissionsRepo.deleteAll(roledata)
        return result
    } catch (error) {
        
    }
}

export const deleteAllRole = async(roledata:any)=>{
    try {
        const result = await rolepermissionsRepo.deleteAll(roledata)
        return result
    } catch (error) {
        
    }
}


export const updateRole = async(roledata:any)=>{
    try {
        
    } catch (error) {
        
    }
}

export default{
    createRole,getRole,deleteRole,deleteAllRole,updateRole
}