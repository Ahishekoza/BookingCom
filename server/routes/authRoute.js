import express from 'express';
import { login, register } from '../controller/authController.js';
const router = express.Router();


// POST REQUEST
router.post('/register',register)
router.post('/login',login)

export default router