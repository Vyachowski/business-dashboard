import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {
  registerUser,
  loginUser,
  refreshTokens,
  logoutUser,
  getUserProfile,
} from '../controllers/userController.js';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(bodyParser.json()); // Get data from post request
router.use(cookieParser()); // Enable cookie handling

router.post('/sign-up', registerUser);
router.post('/sign-in', loginUser);
router.post('/refresh', refreshTokens);
router.post('/logout', authMiddleware, logoutUser);
router.get('/profile', authMiddleware, getUserProfile);

export default router;