import { DataTypes, type CreationOptional } from "sequelize";
import { BaseModel, baseModelAttributes } from "../../../utils/base.schema.js";
import { sequelize } from "../../../connections/pg.connection.js";

export class PermissionSchema extends BaseModel<PermissionSchema>{
    declare name:string;
    declare is_global:CreationOptional<boolean>
}

PermissionSchema.init({
    ...baseModelAttributes,
    name:{
        type:DataTypes.TEXT,
        allowNull:false,
        unique:true
    },
    is_global:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
},{
    sequelize,
    tableName:"permissions",
    timestamps:false
})