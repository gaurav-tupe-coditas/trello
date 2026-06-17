import { DataTypes } from "sequelize";
import { sequelize } from "../../../connections/pg.connection.js";
import { BaseModel, baseModelAttributes } from "../../../utils/base.schema.js";

export class RolePermissionsSchmea extends BaseModel<RolePermissionsSchmea> {
  declare role_id: string;
  declare permission_id: string;
}

RolePermissionsSchmea.init(
  {
    ...baseModelAttributes,

    role_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    permission_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "role_permissions",
  },
);
