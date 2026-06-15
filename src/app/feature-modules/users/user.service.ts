import userRepo from "./user.repo.js"

const createUser = async(userData:any)=>{
try {
    const result = await userRepo.create(userData)
    return result
} catch (error) {
    throw error
}
}

const findUser = async(userData:any)=>{
    try {
        const result=await userRepo.findAll(userData)
        return result;
    } catch (error) {
        throw error
    }
}

export default{
    createUser,findUser
}