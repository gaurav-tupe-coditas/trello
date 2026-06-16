import domainsRepo from "./domains.repo.js";

interface domainData {
  company_id: string;
  domain: string;
}

const findAllByCompany = async (data: domainData) => {
  try {
    return await domainsRepo.findAll(data.company_id, data.domain);
  } catch (error) {
    throw error;
  }
};

const findOneByCompanyAndDomain = async (data: domainData) => {
  try {
    return await domainsRepo.findOne(data.company_id, data.domain);
  } catch (error) {
    throw error;
  }
};

const createDomain = async (data:any) => {
  try {
    return await domainsRepo.create(data);
  } catch (error) {
    throw error;
  }
};

export default {
  findAllByCompany,
  findOneByCompanyAndDomain,
  createDomain,
};
