import activitiesRouter from "./routes/activitiesRouter.js";
import revenueRouter from './routes/revenueRouter.js';
import leadsRouter from './routes/leadsRouter.js';
import userRouter from './routes/userRouter.js';
import sequelize from "./config/database.js";
import express from 'express';

const app = express();

app.use('/activities/', activitiesRouter);
app.use('/revenue/', revenueRouter);
app.use('/leads/', leadsRouter);
app.use('/user/', userRouter);

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
