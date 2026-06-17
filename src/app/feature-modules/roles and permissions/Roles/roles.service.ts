import { create } from "domain"
import rolesRepo from "./roles.repo.js"

export const createRole = async(roledata:any)=>{
    try {
        const result = await rolesRepo.create(roledata)
        return result
    } catch (error) {
        
    }
}

export const getRole = async(roledata:any)=>{
    try {
        const result = await rolesRepo.findOne(roledata)
        return result
    } catch (error) {
        
    }
}


export const deleteRole = async(roledata:any)=>{
    try {
        const result = await rolesRepo.deleteAll(roledata)
        return result
    } catch (error) {
        
    }
}

export const deleteAllRole = async(roledata:any)=>{
    try {
        const result = await rolesRepo.deleteAll(roledata)
        return result
    } catch (error) {
        
    }
}


export const updateRole = async(roledata:any)=>{
    try {
        
    } catch (error) {
        
    }
}

export default{
    createRole,getRole,deleteRole,deleteAllRole,updateRole
}