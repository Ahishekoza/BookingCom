import express from 'express';
import { createHotel } from '../controller/hotelsController.js';
const router = express.Router();


// POST REQUEST
router.post('/',createHotel)


export default router