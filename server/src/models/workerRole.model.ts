import {Schema , model , Document} from "mongoose";
import { IWorker } from "./worker.model";

export interface IWorkerRole extends Document{
    roleName : string;
};

const workerRoleSchema = new Schema({
    roleName : {
        type : String,
        enum : [],
        required : [true,"Worker Role name is required"]
    }
},{timestamps : true});

export const WorkerRole = model<IWorker>("WorkerRole",workerRoleSchema);