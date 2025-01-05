import {Schema , model , Document} from "mongoose";

export interface IDelivery extends Document{
    orderId : Schema.Types.ObjectId
};

const deliverySchema = new Schema<IDelivery>({
    orderId : {
        type : Schema.Types.ObjectId,
        ref : "Order",
        required : [true,"orderid is required"]
    }
},{timestamps : true});

export const Delivery = model<IDelivery>("Delivery",deliverySchema);