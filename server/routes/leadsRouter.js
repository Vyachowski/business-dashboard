import express from 'express';
import bodyParser from 'body-parser';
import authMiddleware from '../middlewares/authMiddleware.js';
import { getLeadsByPeriod, postLeadsByPeriod } from '../controllers/leadsController.js';

const router = express.Router();

// Middleware for parsing JSON requests
router.use(bodyParser.json());

router.get('/', authMiddleware, getLeadsByPeriod);
router.post('/', authMiddleware, postLeadsByPeriod);

export default router;