import { CompanySchema } from "./company.schema.js";

const findById = (id: string) => CompanySchema.findByPk(id);

const findAll = (id: string) =>
  CompanySchema.findAll({ where: { id} });

const create = (data: any) => CompanySchema.create(data);

const update = (id: string, data: any) =>
  CompanySchema.update(data, { where: { id } });

const deleteOne = (id: string, deleted_by: string) =>
  CompanySchema.update({ deleted_by, is_archived: true }, { where: { id } });



export default{
    findById,findAll,create,deleteOne,update
}