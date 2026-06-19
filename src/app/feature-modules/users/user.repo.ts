import type { Attributes, CreateOptions, CreationAttributes, DestroyOptions, FindOptions, Transaction, UpdateOptions } from "sequelize";
import { UserSchema } from "./users.schema.js";

const findAll = (findOptions: FindOptions<Attributes<UserSchema>>) => UserSchema.findAll(findOptions);

const findOne = (findOptions:FindOptions<Attributes<UserSchema>>)=>UserSchema.findOne(findOptions)

const create = (userData: CreationAttributes<UserSchema>,transaction?:Transaction) => UserSchema.create(userData,{transaction:transaction ?? null});

const update = (queryOptions: UpdateOptions<Attributes<UserSchema>>, userData: Partial<Attributes<UserSchema>>,transaction?:Transaction) =>
  UserSchema.update(userData, queryOptions);

const deleteAll = (queryOptions: DestroyOptions<Attributes<UserSchema>>) => UserSchema.destroy(queryOptions);

export default {
  findAll,
  findOne,
  create,
  update,
  deleteAll,
};
