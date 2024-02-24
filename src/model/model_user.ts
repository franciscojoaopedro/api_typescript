import { Schema,model } from "mongoose";

const user_schema=new Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String,required:true}
},{timestamps:true})

export const User=model("User",user_schema)
