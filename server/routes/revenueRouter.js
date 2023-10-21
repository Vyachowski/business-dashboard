import express from 'express';
import bodyParser from 'body-parser';
import authMiddleware from '../middlewares/authMiddleware.js';
import {
  getPPCRevenueByPeriod,
  getSEORevenueByPeriod,
  postRevenueByPeriod
} from '../controllers/revenueController.js';

const router = express.Router();

router.use(bodyParser.json());

router.get('/SEO/', authMiddleware, getSEORevenueByPeriod);
router.get('/PPC/', authMiddleware, getPPCRevenueByPeriod);
router.post('/', authMiddleware, postRevenueByPeriod);

export default router;