import { DataTypes } from "sequelize";
import { BaseModel, baseModelAttributes } from "../../utils/base.schema.js";
import { sequelize } from "../../connections/pg.connection.js";

export class UserSchema extends BaseModel<UserSchema> {
  declare name: string;
  declare email: string;
  declare password: string;
  declare password_version: string;
  declare company_id: string;
  declare global_role: string;
}

UserSchema.init({ ...baseModelAttributes, name: {
    type:DataTypes.STRING
},
email:{
    type:DataTypes.STRING
},password:{
    type:DataTypes.STRING
},
password_version:{
    type:DataTypes.INTEGER
},
company_id:{
    type:DataTypes.UUID
},
global_role:{
    type:DataTypes.ENUM
} }, {
    sequelize,
    timestamps:false
});
