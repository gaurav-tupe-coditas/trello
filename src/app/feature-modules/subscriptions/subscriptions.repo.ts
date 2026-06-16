import { SubscriptionSchema } from "./subscriptions.schema.js";

const findOne =(findOptions:any)=>SubscriptionSchema.findOne(findOptions)


const findAll=(findOptions?:any)=>SubscriptionSchema.findAll(findOptions)

const create=(data:any)=>SubscriptionSchema.create(data)


export default{
    findOne,findAll,create
}