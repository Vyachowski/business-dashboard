import {
  registerUser, loginUser, getUserProfile, getBusinessMetrics, addBusinessMetrics,
} from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import express from 'express';

const router = express.Router();
router.use(bodyParser.json());
router.use(cookieParser());

router.post('/sign-up', registerUser);
router.post('/sign-in', loginUser);
router.get('/profile', authMiddleware, getUserProfile);
router.post('/business-metrics', authMiddleware, addBusinessMetrics);
router.get('/business-metrics', authMiddleware, getBusinessMetrics);

export default router;
