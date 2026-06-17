import permissionsRepo from "./permissions.repo.js"

export const createPermission = async(permissiondata:any)=>{
    try {
        const result = await permissionsRepo.create(permissiondata)
        return result
    } catch (error) {
        
    }
}

export const getPermission = async(permissiondata:any)=>{
    try {
        const result = await permissionsRepo.findOne(permissiondata)
        return result
    } catch (error) {
        
    }
}


export const deletePermission = async(permissiondata:any)=>{
    try {
        const result = await permissionsRepo.deleteAll(permissiondata)
        return result
    } catch (error) {
        
    }
}

export const deleteAllPermission = async(permissiondata:any)=>{
    try {
        const result = await permissionsRepo.deleteAll(permissiondata)
        return result
    } catch (error) {
        
    }
}


export const updatePermission = async(permissiondata:any)=>{
    try {
        
    } catch (error) {
        
    }
}

export default{
    createPermission,getPermission,deletePermission,deleteAllPermission,updatePermission
}