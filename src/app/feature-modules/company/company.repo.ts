import type {
  Attributes,
  CreationAttributes,
  DestroyOptions,
  FindOptions,
  Transaction,
  UpdateOptions,
} from "sequelize";
import { CompanySchema } from "./company.schema.js";

const findById = (id: string) => CompanySchema.findByPk(id);

const findAll = (findOptions: FindOptions<Attributes<CompanySchema>>) =>
  CompanySchema.findAll(findOptions);

const findOne = (findOptions: FindOptions<Attributes<CompanySchema>>) =>
  CompanySchema.findOne(findOptions);

const create = (
  userData: CreationAttributes<CompanySchema>,
  transaction?: Transaction,
) => CompanySchema.create(userData, { transaction: transaction ?? null });

const update = (
  queryOptions: UpdateOptions<Attributes<CompanySchema>>,
  userData: Partial<Attributes<CompanySchema>>,
  transaction?: Transaction,
) =>
  CompanySchema.update(userData, {
    ...queryOptions,
    transaction: transaction ?? null,
  });

const deleteAll = (queryOptions: DestroyOptions<Attributes<CompanySchema>>) =>
  CompanySchema.destroy(queryOptions);

export default {
  findById,
  findAll,
  create,
  deleteAll,
  update,
};
