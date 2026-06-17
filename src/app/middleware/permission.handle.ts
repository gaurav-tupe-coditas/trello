import type { NextFunction, Request, Response } from "express";
import permissionsService from "../feature-modules/roles and permissions/Permissions/permissions.service.js";
import userprojectpermissionService from "../feature-modules/roles and permissions/UserProjectPermission/userprojectpermission.service.js";
import rolepermissionsService from "../feature-modules/roles and permissions/rolepermissions/rolepermissions.service.js";
import userrolesService from "../feature-modules/roles and permissions/userroles/userroles.service.js";
import projectmembersService from "../feature-modules/roles and permissions/Project Members/projectmembers.service.js";

export const RoutePermissionChecker =
  (permissionName: string) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const permissionDetails =
        await permissionsService.getPermission(permissionName);

        if(!permissionDetails)throw "No such permission exists"

        const userroles = await userrolesService.getAllUserRole({user_id:req.user.userId})

        if(!userroles)throw"Unauthorized Action"
        userroles?.forEach(async(record)=>{
            const givenPermissionOnRole = await rolepermissionsService.getRolePermission({role_id:record.id,permission_id:permissionDetails.id})
            if(givenPermissionOnRole)next()
        })

        throw "Unauthroized Actions"

    //   const UserProjectPermissions =
    //     await userprojectpermissionService.getUserProjectPermission({
    //       user_id: req.user.userId,
    //       permission_id: permissionDetails?.id,
    //     });
    //   if (UserProjectPermissions) {
    //     if (!UserProjectPermissions?.is_granted) {
    //       throw "Unauthorized Action";
    //     }
    //     next();
    //   }
    //   const getUserRoles = await projectmembersService.getAllRole({user_id:req.user.userId})

    //   if(!getUserRoles) throw "Unauthorized Action"
    //   getUserRoles.forEach(async(record)=>{
    //     const userrolepermission = await rolepermissionsService.getRolePermission({role_id:record.role_id,permission_id:permissionDetails.id}
        
    //     )
    //     if(userrolepermission)next()
    //   })
      

    //   throw "Unauthorized Action"

      
      
    } catch (error) {
      throw error;
    }
  };



  export const ProjectPermissionChecker = async(PersonProjectDetails:{permissionName:string,project_id:string,user_id:string})=>{
try {
    const permissionDetails =
        await permissionsService.getPermission(PersonProjectDetails.permissionName);

        if(!permissionDetails)return false

      const UserProjectPermissions =
        await userprojectpermissionService.getUserProjectPermission({
          user_id:PersonProjectDetails.user_id,
          permission_id: permissionDetails?.id,
          project_id:PersonProjectDetails.project_id
        });
      if (UserProjectPermissions) {
        if (!UserProjectPermissions?.is_granted) {
          return false
        }
        return true;
      }


      const userRolesOnProject = await projectmembersService.getAllRole({user_id:PersonProjectDetails.user_id,project_id:PersonProjectDetails.project_id})

      userRolesOnProject?.forEach(async(record)=>{
        const PermissionsOnRole = await rolepermissionsService.getRolePermission({role_id:record.id,permission_id:permissionDetails.id})

        if(PermissionsOnRole)return true
      })
      return false
} catch (error) {
    throw error
}
  }
