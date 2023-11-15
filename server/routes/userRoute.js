import express from 'express';
import { verifyToken, verifyisAdmin } from '../verify.js';
import { deleteUser, getUserById, getUsers, updateUser } from '../controller/userController.js';
const router = express.Router();



// PUT REQUEST
router.put('/:id',verifyToken,verifyisAdmin,updateUser)
// DELETE REQUEST
router.delete('/:id',verifyToken,verifyisAdmin,deleteUser)
// GET REQUEST
router.get('/:id',verifyToken,verifyisAdmin,getUserById)
router.get('/',verifyToken,verifyisAdmin,getUsers)


export default router