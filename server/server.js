import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.SERVER_PORT
app.listen(port, () => {
  console.log(`App is listening on ${port}`)
})