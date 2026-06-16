import { DataTypes, type CreationOptional } from "sequelize";
import { BaseModel, baseModelAttributes } from "../../utils/base.schema.js";
import { sequelize } from "../../connections/pg.connection.js";

export class CompanySchema extends BaseModel<CompanySchema> {
  declare name: string;
  declare logo: CreationOptional<string | null>;

  declare subscription_id: string;
}

CompanySchema.init(
  {
    ...baseModelAttributes,
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    logo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    subscription_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "companies",
    timestamps: false,
  },
);
