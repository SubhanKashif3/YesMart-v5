import {Schema , model , Document} from "mongoose"

export interface IWorker extends Document{
    role : Schema.Types.ObjectId;
    workerName : string;
    salary : number;
    workerPhoneNumber : string;
    shiftSchedule : Schema.Types.ObjectId;
};

const workerSchema = new Schema<IWorker>({
    role : {
        type : Schema.Types.ObjectId,
        ref : "WorkerRole",
        required : [true,"A role is required for a worker"]
    },
    workerName : {
        type : String,
        required : [true,"Worker name is required"]
    },
    workerPhoneNumber : {
        type : String,
        required : [true,"Worker phonenumber is required"]
    },
    salary : {
        type : Number,
        min : 0,
        required : [true,"salary is required"]
    },
    shiftSchedule : {
        type : Schema.Types.ObjectId,
        ref : "ShiftSchedule",
        required : [true,"A shift schedule is required for user"]
    }
},{timestamps : true});

const Worker = model<IWorker>("Worker",workerSchema);