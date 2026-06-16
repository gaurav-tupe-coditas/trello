import { DataTypes } from "sequelize";
import { sequelize } from "../../connections/pg.connection.js";
import { BaseModel, baseModelAttributes } from "../../utils/base.schema.js";

export class SubscriptionSchema extends BaseModel<SubscriptionSchema>{
    declare name:string
}

SubscriptionSchema.init({...baseModelAttributes,
    name:{
        type:DataTypes.TEXT,
        allowNull:false
    }
},{
    sequelize,
    tableName:"subscriptions",
    timestamps:false
})