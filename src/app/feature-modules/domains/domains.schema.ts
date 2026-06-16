import { DataTypes } from "sequelize";
import { sequelize } from "../../connections/pg.connection.js";
import { BaseModel, baseModelAttributes } from "../../utils/base.schema.js";

export class DomainSchema extends BaseModel<DomainSchema> {
  declare company_id: string;
  declare domain: string;
}

DomainSchema.init(
  {
    ...baseModelAttributes,
    company_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    domain: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { sequelize, tableName: "allowed_domains", timestamps: false },
);
