import {Schema , model , Document} from "mongoose";

export interface ICart extends Document{
    ownerId : Schema.Types.ObjectId;
    totalCost : number;
};

const cartSchema = new Schema<ICart>({
    ownerId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : [true,"Cart owner is required"]
    },
    totalCost : {
        type : Number,
        required : [true,"total cost is required"],
        min : 0
    }
},{timestamps : true});

export const Cart = model<ICart>("Cart",cartSchema);