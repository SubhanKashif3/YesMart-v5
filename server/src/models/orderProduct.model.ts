import { Schema , model , Document } from "mongoose";

export interface IOrderProduct extends Document{
    orderId : Schema.Types.ObjectId;
    productId : Schema.Types.ObjectId;
};

const orderProductSchema = new Schema<IOrderProduct>({
    orderId : {
        type : Schema.Types.ObjectId,
        ref : "Order",
        required : [true,"Order id is required"]
    },
    productId : {
        type : Schema.Types.ObjectId,
        ref : "Product",
        required : [true,"productId is required"]
    }
},{timestamps : true});

export const OrderProduct = model<IOrderProduct>("OrderProduct",orderProductSchema);