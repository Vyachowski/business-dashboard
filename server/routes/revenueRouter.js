import express from 'express';
import bodyParser from 'body-parser';
import authMiddleware from '../middlewares/authMiddleware.js';
import { getIncomeByPeriod, postIncomeByPeriod } from '../controllers/revenueController.js';

const router = express.Router();

// Middleware for parsing JSON requests
router.use(bodyParser.json());

router.get('/', authMiddleware, getIncomeByPeriod);
router.post('/', authMiddleware, postIncomeByPeriod);

export default router;