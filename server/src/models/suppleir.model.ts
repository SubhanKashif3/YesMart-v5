import {Schema , model , Document} from "mongoose";

export interface ISuppleir extends Document{
    supplierName : string;
    supplierPhoneNumber : string;
};

const supplierSchema = new Schema<ISuppleir>({
    supplierName : {
        type : String,
        required : [true,"supplier name is required"]
    },
    supplierPhoneNumber : {
        type : String,
        required : [true,"Supplier phone number is required"]
    }
},{timestamps : true});

export const Supplier = model<ISuppleir>("Supplier",supplierSchema);