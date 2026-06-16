import { DataTypes } from "sequelize";
import { BaseModel, baseModelAttributes } from "../../utils/base.schema.js";
import { sequelize } from "../../connections/pg.connection.js";
import type { globalRoles } from "./user.types.js";

export class UserSchema extends BaseModel<UserSchema> {
  declare name: string;
  declare email: string;
  declare password: string;
  declare password_version: number;
  declare company_id: string;
  declare global_role: globalRoles;
}

UserSchema.init(
  {
    ...baseModelAttributes,
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    password_version: {
      type: DataTypes.INTEGER,
    },
    company_id: {
      type: DataTypes.UUID,
    },
    global_role: {
      type: DataTypes.ENUM("SUPER_ADMIN", "COMPANY_ADMIN", "MEMBER"),
    },
  },
  {
    sequelize,
    tableName:"users",
    timestamps: false,
  },
);
