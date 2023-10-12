import sequelize from "../config/database.js";
import Lead from '../models/LeadModel.js';
import { Op } from "sequelize";

export async function getLeadsByPeriod(req, res) {
  try {
    const { startDate, endDate, type } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'Please, define a period of time.' });
    }

    const formattedStartDate = new Date(startDate);
    const formattedEndDate = new Date(endDate);

    let result;

    if (type === 'total') {
      result = await Lead.sum('profit', {
        where: {
          date: {
            [Op.between]: [formattedStartDate, formattedEndDate],
          },
        },
      });
    } else if (type === 'daily') {
      result = await Lead.findAll({
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
}

export async function postLeadsByPeriod(req, res) {
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
      await Lead.create({date: currentDate, profit: profitPerDay, currency: 'Rub'});
      console.log(`Added: Date: ${currentDate}, Profit: ${profitPerDay}, Currency: Rub`);
    }
    console.log('Successfully updated.');
  } catch (error) {
    console.error('Error while adding data:', error);
  } finally {
    await sequelize.close();
  }
}
