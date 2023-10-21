import express from 'express';
import bodyParser from 'body-parser';
import authMiddleware from '../middlewares/authMiddleware.js';
import {generateRandomLeads, getLeadsByPeriod, postLeadsByPeriod} from '../controllers/leadsController.js';

const router = express.Router();

// Middleware for parsing JSON requests
router.use(bodyParser.json());

router.get('/create/', authMiddleware, generateRandomLeads);
router.get('/', authMiddleware, getLeadsByPeriod);
router.post('/', authMiddleware, postLeadsByPeriod);

export default router;