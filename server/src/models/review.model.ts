import { Schema , model , Document } from "mongoose";

export interface IReview extends Document{
    userId : Schema.Types.ObjectId;
    rating : number;
    reviewBody : string;
    reviewImages : string[];
    orderProductId : Schema.Types.ObjectId;
};

const reviewSchema = new Schema<IReview>({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : [true,"userId is required"]
    },
    rating : {
        type : Number,
        min : 0,
        max : 5,
        required : [true,"rating is required"]
    },
  

},{timestamps : true})