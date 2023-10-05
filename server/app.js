import express from 'express';
import 'dotenv/config';
import userRouter from './user/auth.js';
import incomeRouter from './income/income.js';
import authMiddleware from "./user/authMiddleware.js";
import cookieParser from "cookie-parser";

// Create express server
const app = express();
const port = process.env.SERVER_PORT;

// Add routers
app.use(cookieParser());
app.use('/api/user', userRouter);
app.use('/api/income', incomeRouter);

// Test route
app.get('/api/test', authMiddleware, (req, res) => {
  // Access the authenticated user's information via req.user
  res.json({ message: `Welcome, User!` });
});

// Start server
app.listen(port, () => {
  console.log(`App is listening on ${port}`)
})

// http://127.0.0.1:3011/api/income?startDate=2023-09-01&endDate=2023-09-02&type=total
// query example total = GET http://127.0.0.1:3011/api/income?startDate=2023-01-01&endDate=2023-09-30&type=total
// query example daily = GET http://127.0.0.1:3011/api/income?startDate=2023-01-01&endDate=2023-09-30&type=daily