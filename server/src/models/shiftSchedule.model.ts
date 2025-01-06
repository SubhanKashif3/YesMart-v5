import {Schema , model , Document} from "mongoose";

export interface IShiftSchedule extends Document{
    startTime : string;
    endTime : string;
};

const shiftScheduleSchema = new Schema<IShiftSchedule>({
    startTime : {
        type : String,
        enum : [],
        required : [true,"Start time is required"]
    },
    endTime : {
        type : String,
        enum : [],
        required : [true,"End time is required"]
    }
},{
    timestamps : true
});

export const ShiftSchedule = model<IShiftSchedule>("ShiftSchedule",shiftScheduleSchema);