import {Schema , model , Document} from "mongoose";

export interface INotification extends Document{
    message : string;
    userId : Schema.Types.ObjectId | null;
};

const notificationSchema = new Schema<INotification>({
    message : {
        type : String,
        required : [true,"message is required"]
    },

    userId : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
},{timestamps : true});


export const Notification = model<INotification>("Notification",notificationSchema);