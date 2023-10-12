import incomeRouter from './routes/incomeRouter.js';
import leadsRouter from './routes/leadsRouter.js';
import userRouter from './routes/userRouter.js';
import sequelize from "./config/database.js";
import express from 'express';

const app = express();

app.use('/user', userRouter);
app.use('/income', incomeRouter);
app.use('/leads', leadsRouter);

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
