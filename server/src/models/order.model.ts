import { Schema, model , Document } from "mongoose";

export interface IOrder extends Document{
    userId : Schema.Types.ObjectId;
    totalCost : number;
    status : string;
};

const orderSchema = new Schema<IOrder>({
    userId  : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : [true,"UserId is required"]
    },
    totalCost : {
        type : Number,
        required : [true,"total cost is required"],
        min : 600
    },
    status : {
        type : String,
        enum : [],
        required : [true,"Status is required"],
        default : "pending..."
    }
},{timestamps : true});

export const Order = model<IOrder>("Order",orderSchema);