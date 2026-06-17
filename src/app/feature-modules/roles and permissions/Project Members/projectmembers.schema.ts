import { DataTypes } from "sequelize";
import { sequelize } from "../../../connections/pg.connection.js";
import { BaseModel, baseModelAttributes } from "../../../utils/base.schema.js";

export class ProjectMembers extends BaseModel<ProjectMembers>{
    declare project_id:string;
    declare user_id:string;
    declare role_id:string;
}

ProjectMembers.init({
    ...baseModelAttributes,
    project_id:{
        type:DataTypes.UUID,
        allowNull:false
    },
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
    tableName:"project_members",
    timestamps:false
})