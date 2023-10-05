import {DataTypes, Op, Sequelize} from "sequelize";
import express from "express";
import bodyParser from 'body-parser';
import authMiddleware from "../user/authMiddleware.js";
const router = express.Router();

// Income API
// Middleware for parsing JSON requests
router.use(bodyParser.json()); // Get data from post request

// Connect to database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// Create Income model
const Income = sequelize.define('Income', {
  date: {
    type: DataTypes.DATEONLY,
    primaryKey: true,
    allowNull: false
  },
  profit: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Get income by period
router.get('/', authMiddleware, async (req, res) => {
  await sequelize.sync();
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

// Post income by period
router.post('/', authMiddleware, async (req, res) => {
  await sequelize.sync();
  const {startDate, endDate, profit} = req.body;

  if (!startDate || !endDate) {
    return res.status(400).json({error: 'Please, define a period of time.'});
  }

  const formattedStartDate = new Date(startDate);
  const formattedEndDate = new Date(endDate);
  const differenceInMilliseconds = Math.abs(formattedStartDate - formattedEndDate);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsPerDay) + 1;
  const profitPerDay = Math.ceil(Number(profit) / differenceInDays);

  try {
    for (let currentDate = formattedStartDate; currentDate <= formattedEndDate; currentDate.setDate(currentDate.getDate() + 1)) {
      await Income.create({date: currentDate, profit: profitPerDay, currency: 'Rub'});
      console.log(`Added: Date: ${currentDate}, Profit: ${profitPerDay}, Currency: Rub`);
    }
    console.log('Successfully updated.');
  } catch (error) {
    console.error('Error while adding data:', error);
  } finally {
    await sequelize.close();
  }
});

export default router;