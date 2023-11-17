import express from 'express';
import { countHotelByCity, countHotelByType, createHotel, deleteHotel, getAllRoomsOfTheHotel, getHotelById, getHotels, updateHotel } from '../controller/hotelsController.js';
import { verifyToken, verifyisAdmin } from '../verify.js';
const router = express.Router();


// POST REQUEST
router.post('/',verifyToken,verifyisAdmin,createHotel)
// PUT REQUEST
router.put('/:id',verifyToken,verifyisAdmin,updateHotel)
// DELETE REQUEST
router.delete('/:id',verifyToken,verifyisAdmin,deleteHotel)
// GET REQUEST
router.get('/find/:id',getHotelById)
router.get('/',getHotels)
router.get('/countByCity',countHotelByCity)
router.get('/countByType',countHotelByType)
router.get('/rooms/:hotelId',getAllRoomsOfTheHotel)


export default router