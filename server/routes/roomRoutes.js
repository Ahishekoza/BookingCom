import express from 'express';
import { verifyToken, verifyisAdmin } from '../verify.js';
import { createRoom, deleteRoom, getRoomById, getRooms, updateRoom } from '../controller/roomController.js';
const router = express.Router();


// POST REQUEST
router.post('/:hotelId',createRoom)
// PUT REQUEST
router.put('/:id',verifyToken,verifyisAdmin,updateRoom)
// DELETE REQUEST
router.delete('/:id/:hotelId',verifyToken,verifyisAdmin,deleteRoom)
// GET REQUEST
router.get('/:id',getRoomById)
router.get('/',getRooms)


export default router