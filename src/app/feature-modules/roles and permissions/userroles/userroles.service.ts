import userrolesRepo from "./userroles.repo.js";

 const createUserRole = async (userole: any) => {
  try {
    const result = await userrolesRepo.create(userole);
    return result;
  } catch (error) {}
};

 const getUserRole = async (userole: any) => {
  try {
    const result = await userrolesRepo.findOne(userole);
    return result;
  } catch (error) {}
};


 const getAllUserRole = async(userole: any) => {
  try {
    const result = await userrolesRepo.findAll(userole);
    return result;
  } catch (error) {}
};
 const deleteUserRole = async (userole: any) => {
  try {
    const result = await userrolesRepo.deleteAll(userole);
    return result;
  } catch (error) {}
};

 const deleteAllUserRole = async (userole: any) => {
  try {
    const result = await userrolesRepo.deleteAll(userole);
    return result;
  } catch (error) {}
};

 const updateUserRole = async (userole: any) => {
  try {
  } catch (error) {}
};

export default {
  createUserRole,
  getUserRole,
  getAllUserRole,
  deleteUserRole,
  deleteAllUserRole,
  updateUserRole,
};
