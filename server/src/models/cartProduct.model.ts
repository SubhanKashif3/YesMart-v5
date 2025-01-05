import { Schema , model , Document } from "mongoose";

export interface ICartProduct extends Document{
    cartId : Schema.Types.ObjectId;
    productId : Schema.Types.ObjectId
};

const cartProductSchema = new Schema<ICartProduct>({
    cartId : {
        type : Schema.Types.ObjectId,
        ref : "Cart",
        required : [true,"cartId is required"]
    },
    productId : {
        type : Schema.Types.ObjectId,
        ref : "Product",
        required : [true,"Product id is required"]
    }
},{timestamps : true})