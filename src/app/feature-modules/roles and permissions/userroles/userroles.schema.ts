import { DataTypes } from "sequelize";
import { sequelize } from "../../../connections/pg.connection.js";
import { BaseModel, baseModelAttributes } from "../../../utils/base.schema.js";

export class UserRolesSchema extends BaseModel<UserRolesSchema>{
declare user_id:string
declare role_id:string
}

UserRolesSchema.init({
    ...baseModelAttributes,
    user_id:{
        type:DataTypes.UUID,
        allowNull:false
    },
    role_id:{
        type:DataTypes.UUID,
        allowNull:false
    }
},{
    sequelize,
    tableName:"user_role",
    timestamps:true
})