import express from "express";
import {
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser
} from "../controllers/Users.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

// Detect and check the user
router.get('/users', verifyUser, getUsers);
router.get('/users/:id', verifyUser, getUserById);
router.post('/users/', createUser);
router.patch('/users/:id', verifyUser,  updateUser);
router.delete('/users/:id', verifyUser, deleteUser);

export default router;