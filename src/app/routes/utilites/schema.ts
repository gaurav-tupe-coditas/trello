import { randomUUID } from "crypto";
import {
  DataTypes,
  Model,
  type CreationOptional,
  type InferAttributes,
  type InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../../connections/pg.connection.js";

export class customClassSchema extends Model<
  InferAttributes<customClassSchema>,
  InferCreationAttributes<customClassSchema>
> {
  declare id: CreationOptional<string>;
}

customClassSchema.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: randomUUID(),
    },
  },
  {
    sequelize,
  },
);
