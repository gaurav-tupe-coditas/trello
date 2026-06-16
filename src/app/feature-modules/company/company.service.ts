import { email } from "zod";
import domainsService from "../domains/domains.service.js";
import subscriptionsRepo from "../subscriptions/subscriptions.repo.js";
import userService from "../users/user.service.js";
import companyRepo from "./company.repo.js";

interface compnayCreation {
  name: string;
  logo?: string | null;
  subscription_id: string;
  admin_email: string;
  admin_name: string;
  createdBy: string;
}

const createCompany = async (data: compnayCreation) => {
  try {
    const subscription = await subscriptionsRepo.findOne({
      subscription_id: data.subscription_id,
    });

    if (!subscription) {
      throw "Subscription tier not found";
    }

    const company = await companyRepo.create({
      name: data.name,
      logo: data.logo,
      subscription_id: data.subscription_id,
      created_by: data.createdBy,
    });

    if (!company) {
      throw new Error("Failed to create company");
    }

    const adminEmail = data.admin_email.toLowerCase().trim();
    const domain = adminEmail.split("@")[1];
    if (domain) {
      await domainsService.createDomain({ company_id: company.id,domain:domain,created_by:data.createdBy });
    }

    const adminUser = await userService.createUser({
        email:adminEmail,
        name:data.admin_name,
        global_role:"COMPANY_ADMIN",
        company_id:company.id,
        created_by:data.createdBy
    })

    return {
        company,admin:adminUser
    }
  } catch (error) {
    throw error;
  }
};


const getCompanyById = async(id:string)=>{
    try {
        return await companyRepo.findAll(id)
    } catch (error) {
        throw error
    }
}

export default {
    createCompany,getCompanyById
}