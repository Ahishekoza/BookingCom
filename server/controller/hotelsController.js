import hotelSchema from "../models/hotels.js";

export const createHotel = async(req,res)=>{
    await hotelSchema.create(req.body).then((hotel)=>{
        res.status(201).json({
            message : 'Hotel created successfully ',
            hotel : hotel
        })
    }).catch((error)=>{
        console.log(error)
        res.status(400).json({
            message:`error creating hotel ${error.message}`
        })
    })
}