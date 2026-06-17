import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes, type ModelAttributeColumnOptions } from "sequelize";

export abstract class BaseModel<M extends Model<InferAttributes<M>,InferCreationAttributes<M>>>extends Model<InferAttributes<M>,InferCreationAttributes<M>>{
    declare id :CreationOptional<string>;
    declare created_by:CreationOptional<string>;
    declare created_at:CreationOptional<Date>;
    declare updated_by:CreationOptional<string>;
    declare updated_at:CreationOptional<Date>;
    declare deleted_by:CreationOptional<string>;
    declare deleted_at:CreationOptional<Date>;
    declare is_archived:CreationOptional<Boolean>
}

export const baseModelAttributes:Record<"id"| "is_archived"|"created_at"|"created_by"|"updated_at"|"updated_by"|"deleted_at"|"deleted_by",ModelAttributeColumnOptions<any>> = {
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    is_archived:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    created_at:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW,
        allowNull:false
    },
    created_by:{
        type:DataTypes.UUID,
        allowNull:false
    },
    updated_at:{
        type:DataTypes.DATE,
    },
    updated_by:{
        type:DataTypes.UUID
    },
    deleted_at:{
        type:DataTypes.DATE
    },
    deleted_by:{
        type:DataTypes.UUID
    }
}