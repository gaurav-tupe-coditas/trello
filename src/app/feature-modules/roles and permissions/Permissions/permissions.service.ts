import permissionsRepo from "./permissions.repo.js"

export const createRole = async(permissiondata:any)=>{
    try {
        const result = await permissionsRepo.create(permissiondata)
        return result
    } catch (error) {
        
    }
}

export const getRole = async(permissiondata:any)=>{
    try {
        const result = await permissionsRepo.findOne(permissiondata)
        return result
    } catch (error) {
        
    }
}


export const deleteRole = async(permissiondata:any)=>{
    try {
        const result = await permissionsRepo.deleteAll(permissiondata)
        return result
    } catch (error) {
        
    }
}

export const deleteAllRole = async(permissiondata:any)=>{
    try {
        const result = await permissionsRepo.deleteAll(permissiondata)
        return result
    } catch (error) {
        
    }
}


export const updateRole = async(permissiondata:any)=>{
    try {
        
    } catch (error) {
        
    }
}

export default{
    createRole,getRole,deleteRole,deleteAllRole,updateRole
}