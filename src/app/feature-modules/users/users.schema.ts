import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
} from "sequelize";
import { customClassSchema } from "../../routes/utilites/schema.js";

export class UserSchema extends Model<
  InferAttributes<UserSchema>,
  InferCreationAttributes<UserSchema>
> {
    declare name:string;
    declare email:string;
    declare password:string;
    declare password_version:string;
    declare company_id:string;
    declare global_role:string;
    declare is_archived:string;
    declare created_at:Date;
    declare created_by:string;
    declare updated_by:string;
    declare updated_at:Date;
    declare deleted_at:Date;
    declare deleted_by:string;

}
