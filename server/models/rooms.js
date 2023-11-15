import mongoose from "mongoose";
const roomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    maxPeople:{
        type:Number,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    roomNumbers :[
        {
            roomNo:{
                type:Number,
            },
            unavailableDates:[
                {
                    type:Date
                }
            ]
        }
    ]
   

},{
    timestamps:true,
})


export default mongoose.model('rooms',roomSchema)