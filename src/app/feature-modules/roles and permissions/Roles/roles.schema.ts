import { DataTypes, type CreationOptional } from "sequelize";
import { BaseModel, baseModelAttributes } from "../../../utils/base.schema.js";
import { sequelize } from "../../../connections/pg.connection.js";

export class RoleSchema extends BaseModel<RoleSchema> {
  declare company_id: CreationOptional<string | null>;

  declare name: string;
  declare is_default: CreationOptional<boolean>;
}

RoleSchema.init(
  {
    ...baseModelAttributes,
    company_id: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    name: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { sequelize, timestamps: false, tableName: "roles" },
);
