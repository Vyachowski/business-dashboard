import activitiesRouter from "./routes/activitiesRouter.js";
import revenueRouter from './routes/revenueRouter.js';
import leadsRouter from './routes/leadsRouter.js';
import userRouter from './routes/userRouter.js';
import sequelize from "./config/database.js";
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors({
  origin: 'http://localhost:5174',
  credentials: true,
}));

app.use('/api/activities/', activitiesRouter);
app.use('/api/revenue/', revenueRouter);
app.use('/api/leads/', leadsRouter);
app.use('/api/user/', userRouter);

sequelize.sync({ force: false })
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((error) => {
    console.error('Error synchronizing models:', error);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
