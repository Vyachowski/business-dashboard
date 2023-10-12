import express from 'express';
import userRouter from './routes/userRouter.js';
import incomeRouter from './routes/incomeRouter.js';
import sequelize from "./config/database.js";

const app = express();

app.use('/users', userRouter);
app.use('/income', incomeRouter);

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
