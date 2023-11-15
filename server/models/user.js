import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profileImage:{
        type:String,
    },
    country:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },

},{
    timestamps:true,
})


export default mongoose.model('users',userSchema)