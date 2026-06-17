import projectmembersRepo from "./projectmembers.repo.js"

export const createRole = async(projectmemberdata:any)=>{
    try {
        const result = await projectmembersRepo.create(projectmemberdata)
        return result
    } catch (error) {
        
    }
}

export const getRole = async(projectmemberdata:any)=>{
    try {
        const result = await projectmembersRepo.findOne(projectmemberdata)
        return result
    } catch (error) {
        
    }
}

export const getAllRole = async(projectmemberdata:any)=>{
    try {
        const result = await projectmembersRepo.findAll(projectmemberdata)
        return result
    } catch (error) {
        
    }
}


export const deleteRole = async(projectmemberdata:any)=>{
    try {
        const result = await projectmembersRepo.deleteAll(projectmemberdata)
        return result
    } catch (error) {
        
    }
}

export const deleteAllRole = async(projectmemberdata:any)=>{
    try {
        const result = await projectmembersRepo.deleteAll(projectmemberdata)
        return result
    } catch (error) {
        
    }
}


export const updateRole = async(projectmemberdata:any)=>{
    try {
        
    } catch (error) {
        
    }
}

export default{
    createRole,getRole,getAllRole,deleteRole,deleteAllRole,updateRole
}