import {Schema , model , Document} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_EXPIRY, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_EXPIRY, REFRESH_TOKEN_SECRET } from "../constants/constants";

export interface IUser extends Document{
    name : string;
    email : string;
    password : string;
    refreshToken : string;
    generateAccessToken : () => string;
    generateRefreshToken : () => string;
    generateTokens : () => string;
    comparePasssword : () => Promise<boolean>;
};

const userSchema = new Schema<IUser>({
    name : {
        type : String,
        required : [true,"name is required"]
    },
    email : {
        type : String,
        lowercase : true,
        trim : true,
        unqiue : true,
        required : [true,"email is required"]
    },

    password : {
        type : String,
        min : 8,
        required : [true,"password is required"]
    },
    refreshToken : String
},{
    timestamps : true
});
userSchema.pre("save", async function () {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id
        },
        ACCESS_TOKEN_SECRET,
        {
            expiresIn : ACCESS_TOKEN_EXPIRY
        }
    )
};

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id : this._id
        },
        REFRESH_TOKEN_SECRET,
        {
            expiresIn : REFRESH_TOKEN_EXPIRY
        }
    )
};
userSchema.methods.generateTokens = function(){
    const accessToken = this.generateAccessToken();
    const refreshToken = this.generateRefreshToken();
    return {accessToken , refreshToken}
};

userSchema.methods.comparePasssword = async function(password: string): Promise<boolean> {
    return await bcrypt.compare(password,this.password);
};

const User = model<IUser>("User",userSchema);