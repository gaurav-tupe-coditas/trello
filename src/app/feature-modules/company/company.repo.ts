import type { Transaction } from "sequelize";
import { CompanySchema } from "./company.schema.js";

const findById = (id: string) => CompanySchema.findByPk(id);

const findAll = (id: string) =>
  CompanySchema.findAll({ where: { id} });

const create = (data: any,transaction?:Transaction ) => CompanySchema.create(data,{transaction:transaction ?? null});

const update = (id: string, data: any,transaction?:Transaction) =>
  CompanySchema.update(data, { where: { id } });

const deleteOne = (id: string, deleted_by: string) =>
  CompanySchema.update({ deleted_by, is_archived: true }, { where: { id } });



export default{
    findById,findAll,create,deleteOne,update
}