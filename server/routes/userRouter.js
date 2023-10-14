import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {
  registerUser,
  loginUser,
  getUserProfile,
} from '../controllers/userController.js';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(bodyParser.json());
router.use(cookieParser());

router.post('/sign-up', registerUser);
router.post('/sign-in', loginUser);
router.get('/profile', authMiddleware, getUserProfile);

export default router;