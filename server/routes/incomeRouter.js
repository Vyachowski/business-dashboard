import express from 'express';
import bodyParser from 'body-parser';
import authMiddleware from '../middlewares/authMiddleware.js';
import { getIncomeByPeriod, postIncomeByPeriod } from '../controllers/incomeController.js';

const router = express.Router();

// Income API
// Middleware for parsing JSON requests
router.use(bodyParser.json());

// Get income by period
router.get('/', authMiddleware, getIncomeByPeriod);
// router.get('/', getIncomeByPeriod);

// Post income by period
router.post('/', authMiddleware, postIncomeByPeriod);

export default router;