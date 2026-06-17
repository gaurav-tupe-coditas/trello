import userprojectpermissionRepo from "./userprojectpermission.repo.js";

export const createUserProjectPermission = async (userprojectpermissiondata: any) => {
  try {
    const result = await userprojectpermissionRepo.create(userprojectpermissiondata);
    return result;
  } catch (error) {}
};

export const getUserProjectPermission = async (userprojectpermissiondata: any) => {
  try {
    const result = await userprojectpermissionRepo.findOne(userprojectpermissiondata);
    return result;
  } catch (error) {}
};

export const deleteUserProjectPermission = async (userprojectpermissiondata: any) => {
  try {
    const result = await userprojectpermissionRepo.deleteAll(userprojectpermissiondata);
    return result;
  } catch (error) {}
};

export const deleteAllUserProjectPermission = async (userprojectpermissiondata: any) => {
  try {
    const result = await userprojectpermissionRepo.deleteAll(userprojectpermissiondata);
    return result;
  } catch (error) {}
};

export const updateUserProjectPermission = async (userprojectpermissiondata: any) => {
  try {
  } catch (error) {}
};

export default {
  createUserProjectPermission,
  getUserProjectPermission,
  deleteUserProjectPermission,
  deleteAllUserProjectPermission,
  updateUserProjectPermission,
};
