import roomSchema from '../models/rooms.js'
import hotelSchema from '../models/hotels.js'

export const createRoom = async (req, res) => {
    try {
        const newRoom = new roomSchema(req.body)

        await newRoom.save()
        try {
            await hotelSchema.findByIdAndUpdate(req.params.hotelId, {
                $push: { rooms: newRoom._id }
            }, { new: true })
        } catch (error) {
            res.status(404).send('Error adding room in hotel: ' + error.message)
        }
        res.status(201).json({
            message: 'Room added successfully',
            room:newRoom
        })
    } catch (error) {
        res.status(404).send('Error creating room: ' + error.message)
    }
}

export const updateRoom = async (req, res) => {
    //  parameter and body 
    await roomSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then((updatedResponse) => {
            res.status(200).json({
                updatedRoom: updatedResponse
            })
        })
        .catch((error) => {
            res.status(404).json({
                message: error.message
            })
        });

}

export const deleteRoom = async (req, res) => {
    await roomSchema.findByIdAndDelete(req.params.id)
        .then(async () => {
            await hotelSchema.findByIdAndUpdate(req.params.hotelId, {
                $pull: { rooms: req.params.id }
            }, { new: true })

            res.status(200).send({
                message: 'Room deleted successfully'
            })
        })
        .catch((error) => {
            res.status(404).json({
                message: error.message
            })
        });
}

export const getRoomById = async (req, res) => {
    await roomSchema.findById(req.params.id)
        .then((room) => {
            res.status(200).json({
                message: 'Room found successfully',
                room: room
            })
        })
        .catch((error) => {
            res.status(404).json({
                message: error.message
            })
        })
}

export const getRooms = async (req, res) => {
    await roomSchema.find()
        .then((room) => {
            res.status(200).json({
                message: 'Rooms found successfully',
                rooms: room
            })
        })
        .catch((error) => {
            res.status(404).json({
                message: error.message
            })
        })
}