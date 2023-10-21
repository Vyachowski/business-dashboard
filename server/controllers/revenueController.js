import Revenue from '../models/RevenueModel.js';
import {Op} from "sequelize";

export async function getSEORevenueByPeriod(req, res) {
  try {
    const { startDate, endDate, type } = req.query;
    const { id } = req.user;

    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'Please, define a period of time.' });
    }

    const formattedStartDate = new Date(startDate);
    const formattedEndDate = new Date(endDate);

    let result;

    if (type === 'total') {
      result = await Revenue.sum('profit', {
        where: {
          date: {
            [Op.between]: [formattedStartDate, formattedEndDate],
          },
          source: 'SEO',
          userId: id,
        },
      });
    } else if (type === 'daily') {
      result = await Revenue.findAll({
        where: {
          date: {
            [Op.between]: [formattedStartDate, formattedEndDate],
          },
          source: 'SEO',
          userId: id,
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

export async function getPPCRevenueByPeriod(req, res) {
  try {
    const { startDate, endDate, type } = req.query;
    const { id } = req.user;

    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'Please, define a period of time.' });
    }

    const formattedStartDate = new Date(startDate);
    const formattedEndDate = new Date(endDate);

    let result;

    if (type === 'total') {
      result = await Revenue.sum('profit', {
        where: {
          date: {
            [Op.between]: [formattedStartDate, formattedEndDate],
          },
          source: 'PPC',
          userId: id,
        },
      });
    } else if (type === 'daily') {
      result = await Revenue.findAll({
        where: {
          date: {
            [Op.between]: [formattedStartDate, formattedEndDate],
          },
          source: 'PPC',
          userId: id,
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

export async function getRevenueByPeriod(req, res) {
  try {
    const { startDate, endDate, type } = req.query;
    const { id } = req.user;

    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'Please, define a period of time.' });
    }

    const formattedStartDate = new Date(startDate);
    const formattedEndDate = new Date(endDate);

    let result;

    if (type === 'total') {
      result = await Revenue.sum('profit', {
        where: {
          date: {
            [Op.between]: [formattedStartDate, formattedEndDate],
          },
          userId: id,
        },
      });
    } else if (type === 'daily') {
      result = await Revenue.findAll({
        where: {
          date: {
            [Op.between]: [formattedStartDate, formattedEndDate],
          },
          userId: id,
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

export async function postRevenueByPeriod(req, res) {
  const { id } = req.user;
  const { startDate, endDate, seoRevenuePerPeriod, ppcRevenuePerPeriod } = req.body;

  if (!startDate || !endDate) {
    return res.status(400).json({ error: 'Please, define a period of time.' });
  }

  const formattedStartDate = new Date(startDate);
  const formattedEndDate = new Date(endDate);
  const differenceInMilliseconds = Math.abs(formattedStartDate - formattedEndDate);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsPerDay) + 1;

  const seoRevenuePerDay = Math.ceil(Number(seoRevenuePerPeriod) / differenceInDays);
  const ppcRevenuePerDay = Math.ceil(Number(ppcRevenuePerPeriod) / differenceInDays);

  try {
    for (let currentDate = formattedStartDate; currentDate <= formattedEndDate; currentDate.setDate(currentDate.getDate() + 1)) {
      await Revenue.create({
        date: currentDate,
        profit: seoRevenuePerDay,
        source: 'SEO',
        currency: 'Rub',
        userId: id
      });
      console.log(`Added: Date: ${currentDate}, Profit: ${seoRevenuePerDay}, Source: SEO, Currency: Rub`);

      await Revenue.create({
        date: currentDate,
        profit: ppcRevenuePerDay,
        source: 'PPC',
        currency: 'Rub',
        userId: id
      });
      console.log(`Added: Date: ${currentDate}, Profit: ${ppcRevenuePerDay}, Source: PPC, Currency: Rub`);
    }
    console.log('Successfully updated.');
  } catch (error) {
    console.error('Error while adding data:', error);
  }
}

function getRandomProfit() {
  return Math.ceil(Math.random() * 1000);
}

export async function generateRandomRevenueData(req, res) {
  const { id } = req.user;
  const startDate = new Date('2022-09-16');
  const endDate = new Date('2023-10-15');

  try {
    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
      const seoProfit = getRandomProfit();
      const ppcProfit = getRandomProfit();

      await Revenue.create({
        date: currentDate,
        profit: seoProfit,
        source: 'SEO',
        currency: 'Rub',
        userId: id
      });
      console.log(`Added: Date: ${currentDate}, Profit: ${seoProfit}, Source: SEO, Currency: Rub`);

      await Revenue.create({
        date: currentDate,
        profit: ppcProfit,
        source: 'PPC',
        currency: 'Rub',
        userId: id
      });
      console.log(`Added: Date: ${currentDate}, Profit: ${ppcProfit}, Source: PPC, Currency: Rub`);
    }
    console.log('Random data successfully generated.');
    res.status(200).json({ message: 'Random data generated successfully.' });
  } catch (error) {
    console.error('Error while generating random data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}