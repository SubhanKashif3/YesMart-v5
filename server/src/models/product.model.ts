import {Schema , model , Document} from "mongoose";

export interface IProduct extends Document{
    categoryId : Schema.Types.ObjectId;
    productName : string;
    productPrice : number;
    companyId : Schema.Types.ObjectId;
};

const productSchema = new Schema<IProduct>({
    categoryId : {
        type : Schema.Types.ObjectId,
        ref : "Category",
        required : [true,"Product category is required"]
    },
    productName : {
        type : String,
        required : [true,"product name is required"]
    },
    productPrice : {
        type : Number,
        min : 0,
        required : [true,"product price is required"]
    },
    companyId : {
        type : Schema.Types.ObjectId,
        ref : "Company",
        required : [true,"A company id is required"]
    }
},{timestamps : true});

export const Product = model<IProduct>("Product",productSchema);