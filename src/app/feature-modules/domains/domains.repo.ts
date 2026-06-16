
import { Domain } from "node:domain";
import { DomainSchema } from "./domains.schema.js";

const findOne = (company_id?:string,domain?:string)=>DomainSchema.findOne({where:{company_id,domain}})

const create=(data:any)=>DomainSchema.create(data);

const findAll=(companyId:string,domain?:string)=>DomainSchema.findAll({where:{company_id:companyId,domain,is_archived:false}})

const deleteOne = (id: string, deleted_by: string) =>
  DomainSchema.update({ deleted_by, is_archived: true }, { where: { id } });

export default{
    findOne,findAll,create,deleteOne
}
