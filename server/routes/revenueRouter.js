import express from 'express';
import bodyParser from 'body-parser';
import authMiddleware from '../middlewares/authMiddleware.js';
import {
  getRevenueByPeriod,
  postRevenueByPeriod
} from '../controllers/revenueController.js';

const router = express.Router();

router.use(bodyParser.json());

router.get('/', authMiddleware, getRevenueByPeriod);
router.post('/', authMiddleware, postRevenueByPeriod);

export default router;