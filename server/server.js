import express from 'express';
import 'dotenv/config';
import {Op} from "sequelize";
import Income from './database/incomeModel.js';

const app = express();
const port = process.env.SERVER_PORT

app.get('/api/income', async (req, res) => {
  try {
    const { startDate, endDate, type } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'Please, define a period of time.' });
    }

    const formattedStartDate = new Date(startDate);
    const formattedEndDate = new Date(endDate);

    let result;

    if (type === 'total') {
      result = await Income.sum('profit', {
        where: {
          date: {
            [Op.between]: [formattedStartDate, formattedEndDate],
          },
        },
      });
    } else if (type === 'daily') {
      result = await Income.findAll({
        where: {
          date: {
            [Op.between]: [formattedStartDate, formattedEndDate],
          },
        },
      });
    } else {
      return res.status(400).json({ error: 'Invalid type parameter. Use "total" or "daily".' });
    }

    res.json({ result });
  } catch (error) {
    console.error('Error while handling request:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});


app.listen(port, () => {
  console.log(`App is listening on ${port}`)
})

// query example total = GET http://127.0.0.1:3011/api/income?startDate=2023-01-01&endDate=2023-09-30&type=total
// query example daily = GET http://127.0.0.1:3011/api/income?startDate=2023-01-01&endDate=2023-09-30&type=daily