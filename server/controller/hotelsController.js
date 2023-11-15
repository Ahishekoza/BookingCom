import hotelSchema from "../models/hotels.js";

export const createHotel = async (req, res) => {
    await hotelSchema.create(req.body).then((hotel) => {
        res.status(201).json({
            message: 'Hotel created successfully ',
            hotel: hotel
        })
    }).catch((error) => {
        console.log(error)
        res.status(400).json({
            message: `error creating hotel ${error.message}`
        })
    })
}

export const updateHotel = async (req, res) => {
    //  parameter and body 
    await hotelSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then((updatedResponse) => {
            res.status(200).json({
                updatedHotel: updatedResponse
            })
        })
        .catch((error) => {
            res.status(404).json({
                message: error.message
            })
        });

}

export const deleteHotel = async (req, res) => {
    await hotelSchema.findByIdAndDelete(req.params.id)
        .then((response) => {
            res.status(200).json({
                message: 'Hotel deleted successfully'
            })
        })
        .catch((error) => {
            res.status(404).json({
                message: error.message
            })
        });
}

export const getHotelById = async (req, res) => {
    await hotelSchema.findById(req.params.id)
        .then((hotel) => {
            res.status(200).json({
                message: 'Hotel found successfully',
                hotel: hotel
            })
        })
        .catch((error) => {
            res.status(404).json({
                message: error.message
            })
        })
}

export const getHotels = async (req, res) => {
    // i will have various queries here , like for price and limit

    const { min, max, city,...others } = req.query;
    try {
        const hotels = await hotelSchema.find({
            ...others,
            city : {$regex: new RegExp (req.query.city , 'i')},
            cheapestPrice: { $gt: min || 10, $lt: max || 999 },
        }).limit(4);
        res.status(200).json(hotels);
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
   
}

export const countHotelByCity = async (req, res) => {
    const cities = req.query.cities.split(',')

    try {
        const countByCity = {}
        for (const city of cities) {
            const count = await hotelSchema.countDocuments(
                {
                    city: { $regex: new RegExp(city, 'i') }
                }
            )
            countByCity[city] = count
        }

        res.status(200).json({
            propertyCount: countByCity
        })

    } catch (error) {

    }
}

export const countHotelByType = async (req, res) => {
   try {
    const hotelCount = await hotelSchema.countDocuments({ type: 'hotel' })
    const apartmentCount = await hotelSchema.countDocuments({ type: "apartment" });
    const resortCount = await hotelSchema.countDocuments({ type: "resort" });
    const villaCount = await hotelSchema.countDocuments({ type: "villa" });
    const cabinCount = await hotelSchema.countDocuments({ type: "cabin" });


    res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
    ])
   } catch (error) {
    res.status(500).json({
        message:'Error while processing request'
    })
   }
}