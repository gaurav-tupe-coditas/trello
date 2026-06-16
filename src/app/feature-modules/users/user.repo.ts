import { UserSchema } from "./users.schema.js";

const findAll = (options: any) => UserSchema.findAll(options);

const findOne = (options:any)=>UserSchema.findOne(options)

const create = (userData: any) => UserSchema.create(userData);

const update = (queryOptions: any, userData: any) =>
  UserSchema.update(userData, queryOptions);

const deleteAll = (queryOptions: any) => UserSchema.destroy(queryOptions);

export default {
  findAll,
  findOne,
  create,
  update,
  deleteAll,
};
