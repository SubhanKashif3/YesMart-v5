import {Schema , model , Document} from "mongoose";

export interface IReviewImage extends Document{
    url : string;
    reviewId : Schema.Types.ObjectId;
};

const reviewImageSchema = new Schema<IReviewImage>({
    url : {
        type : String,
        required : [true,"url is required"]
    },
    reviewId : {
        type : Schema.Types.ObjectId,
        required : [true,"reviewId is required"]
    }
},{timestamps : true});

export const ReviewImage = model<IReviewImage>("ReviewImage",reviewImageSchema);