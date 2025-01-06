import {Schema , model , Document} from "mongoose";

export interface IStock extends Document{
    productId : Schema.Types.ObjectId;
    quantity : number;
    supplierId : Schema.Types.ObjectId;
};

const stockSchema = new Schema({
    productId : {
        type : Schema.Types.ObjectId,
        ref : "Product",
        required : [true,"A product is required for stock"]
    },

    quantity : {
        type : Number,
        min : 0,
        requrired : [true,"quantity is required"]
    },
    supplierId : {
        type : Schema.Types.ObjectId,
        ref : "Supplier",
        required : [true,"SupplierId is required"]
    }
},{timestamps : true});

export const Stock = model<IStock>("Stock",stockSchema);