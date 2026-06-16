import userRepo from "./user.repo.js"

const createUser = async(userData:any)=>{
try {
    const result = await userRepo.create(userData)
    return result
} catch (error) {
    throw error
}
}


const findOneUser = async(userData:any)=>{
    try {
        const result=await userRepo.findOne({where:{email:userData.email}})
        return result;
    } catch (error) {
        throw error
    }
}

const findAllUser = async(userData:any)=>{
    try {
        const result=await userRepo.findAll(userData)
        return result;
    } catch (error) {
        throw error
    }
}

export default{
    createUser,findAllUser,findOneUser
}