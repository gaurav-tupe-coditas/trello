import rolepermissionsRepo from "./rolepermissions.repo.js";

 const createRolePermission = async (rolepermissiondata: any) => {
  try {
    const result = await rolepermissionsRepo.create(rolepermissiondata);
    return result;
  } catch (error) {}
};

 const getRolePermission = async (rolepermissiondata: any) => {
  try {
    const result = await rolepermissionsRepo.findOne(rolepermissiondata);
    return result;
  } catch (error) {}
};


 const getAllPermissionForRole = async(rolepermissiondata: any) => {
  try {
    const result = await rolepermissionsRepo.findAll(rolepermissiondata);
    return result;
  } catch (error) {}
};
 const deleteRolePermission = async (rolepermissiondata: any) => {
  try {
    const result = await rolepermissionsRepo.deleteAll(rolepermissiondata);
    return result;
  } catch (error) {}
};

 const deleteAllRolePermission = async (rolepermissiondata: any) => {
  try {
    const result = await rolepermissionsRepo.deleteAll(rolepermissiondata);
    return result;
  } catch (error) {}
};

 const updateRolePermission = async (rolepermissiondata: any) => {
  try {
  } catch (error) {}
};

export default {
  createRolePermission,
  getRolePermission,
  getAllPermissionForRole,
  deleteRolePermission,
  deleteAllRolePermission,
  updateRolePermission,
};
