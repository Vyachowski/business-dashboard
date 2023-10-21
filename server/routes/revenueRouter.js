import express from 'express';
import bodyParser from 'body-parser';
import authMiddleware from '../middlewares/authMiddleware.js';
import {
  generateRandomRevenueData,
  getPPCRevenueByPeriod,
  getRevenueByPeriod,
  getSEORevenueByPeriod,
  postRevenueByPeriod
} from '../controllers/revenueController.js';

const router = express.Router();

router.use(bodyParser.json());

router.get('/SEO/', authMiddleware, getSEORevenueByPeriod);
router.get('/PPC/', authMiddleware, getPPCRevenueByPeriod);
router.get('/create/', authMiddleware, generateRandomRevenueData); // '2022-09-16' till today
router.post('/', authMiddleware, postRevenueByPeriod);
router.get('/', authMiddleware, getRevenueByPeriod);

export default router;