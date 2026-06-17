import rolepermissionsRepo from "./rolepermissions.repo.js"

export const createRole = async(rolepermissiondata:any)=>{
    try {
        const result = await rolepermissionsRepo.create(rolepermissiondata)
        return result
    } catch (error) {
        
    }
}

export const getRole = async(rolepermissiondata:any)=>{
    try {
        const result = await rolepermissionsRepo.findOne(rolepermissiondata)
        return result
    } catch (error) {
        
    }
}


export const deleteRole = async(rolepermissiondata:any)=>{
    try {
        const result = await rolepermissionsRepo.deleteAll(rolepermissiondata)
        return result
    } catch (error) {
        
    }
}

export const deleteAllRole = async(rolepermissiondata:any)=>{
    try {
        const result = await rolepermissionsRepo.deleteAll(rolepermissiondata)
        return result
    } catch (error) {
        
    }
}


export const updateRole = async(rolepermissiondata:any)=>{
    try {
        
    } catch (error) {
        
    }
}

export default{
    createRole,getRole,deleteRole,deleteAllRole,updateRole
}