import type { Transaction } from "sequelize";
import { sequelize } from "../../connections/pg.connection.js";
import domainsService from "../domains/domains.service.js";
import subscriptionsRepo from "../subscriptions/subscriptions.repo.js";
import userService from "../users/user.service.js";
import companyRepo from "./company.repo.js";
import type { compnayCreation } from "./company.types.js";



const createCompany = async (data: compnayCreation) => {
  try {
    const subscription = await subscriptionsRepo.findOne({
      subscription_id: data.subscription_id,
    });

    if (!subscription) {
      throw "Subscription tier not found";
    }

    const result = await sequelize.transaction(async(t:Transaction)=>{
      const company = await companyRepo.create({
      name: data.name,
      logo: data.logo,
      subscription_id: data.subscription_id,
      created_by: data.createdBy,
    },t);

    if (!company) {
      throw new Error("Failed to create company");
    }

    const adminEmail = data.admin_email.toLowerCase().trim();
    const domain = adminEmail.split("@")[1];
    if (domain) {
      await domainsService.createDomain({ company_id: company.id,domain:domain,created_by:data.createdBy },t);
    }

    const adminUser = await userService.createUser({
        email:adminEmail,
        name:data.admin_name,
        global_role:"COMPANY_ADMIN",
        company_id:company.id,
        created_by:data.createdBy
    },t)

    return {
        company,admin:adminUser
    }
    
    }
  )

   return result 
  } catch (error) {
    throw error;
  }
};


const getCompanyById = async(id:string)=>{
    try {
        return await companyRepo.findAll({where:{id}})
    } catch (error) {
        throw error
    }
}

export default {
    createCompany,getCompanyById
}