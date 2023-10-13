import express from 'express';
import bodyParser from 'body-parser';
import authMiddleware from '../middlewares/authMiddleware.js';
import {
  getInsights,
  postInsight,
  getTasks,
  postTask,
  deleteTask,
  deleteInsight
} from '../controllers/activitiesController.js';

const router = express.Router();

router.use(bodyParser.json());

router.delete('/insights/', authMiddleware, deleteInsight);
router.post('/insights/', authMiddleware, postInsight);
router.get('/insights/', authMiddleware, getInsights);
router.delete('/tasks/', authMiddleware, deleteTask);
router.post('/tasks/', authMiddleware, postTask);
router.get('/tasks/', authMiddleware, getTasks);

export default router;