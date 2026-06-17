import { DataTypes, type CreationOptional } from "sequelize";
import { sequelize } from "../../../connections/pg.connection.js";
import { BaseModel, baseModelAttributes } from "../../../utils/base.schema.js";

export class UserProjectPermissionSchema extends BaseModel<UserProjectPermissionSchema>{
    declare user_id:string;
    declare project_id:string;
    declare permission_id:string;
    declare is_granted:boolean;
}

UserProjectPermissionSchema.init({
...baseModelAttributes,
    user_id:{
        type:DataTypes.UUID,
        allowNull:false
    },
    project_id:{
        type:DataTypes.UUID,
        allowNull:false
    },
    permission_id:{
        type:DataTypes.UUID,
        allowNull:false
    },
    is_granted:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
},{
    sequelize,
    tableName:"user_project_permissions",
    timestamps:false
})