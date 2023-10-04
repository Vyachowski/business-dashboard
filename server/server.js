import express from 'express';
import 'dotenv/config';
import {DataTypes, Sequelize} from "sequelize";
import validator from "validator";

// Create express server
const app = express();
const port = process.env.SERVER_PORT

// Add parameters
app.use(express.json()); // Get data from post request

// Income API
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

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


app.post('/api/income', async (req, res) => {
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
    console.log('Succesfully updated.');
  } catch (error) {
    console.error('Error while adding data:', error);
  } finally {
    await sequelize.close();
  }
});

// User API
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

app.post('/api/user/register', async (req, res) => {
  await sequelize.sync();
  const { name, password, email } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({error: 'Invalid email address.'});
  }

  User.create({ name, email, password})
    .catch(error => {
    console.error(error);
    return res.status(400).json({error: 'This email is already registered.'});
  });
})

app.listen(port, () => {
  console.log(`App is listening on ${port}`)
})

// http://127.0.0.1:3011/api/income?startDate=2023-09-01&endDate=2023-09-02&type=total
// query example total = GET http://127.0.0.1:3011/api/income?startDate=2023-01-01&endDate=2023-09-30&type=total
// query example daily = GET http://127.0.0.1:3011/api/income?startDate=2023-01-01&endDate=2023-09-30&type=daily