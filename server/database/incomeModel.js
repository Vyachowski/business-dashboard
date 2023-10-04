import {DataTypes} from "sequelize";
import { Sequelize} from "sequelize";

// Connect info
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.db'
});

const Income = sequelize.define('Income', {
  date: {
    type: DataTypes.DATE,
    primaryKey: true,
    allowNull: false
  },
  profit: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Income'
});

// Income.sync();
//
// Income.create({
//   date: new Date(),
//   profit: 1000,
//   currency: 'RUB'
// }).then(income => {
//   console.log('New record in a database:', income);
// }).catch(error => {
//   console.error('Error while creating record:', error);
// });
//
// async function addIncomeRecords() {
//   try {
//     await sequelize.sync();
//
//     for (let day = 1; day <= 30; day++) {
//       const date = new Date(`2023-09-${day}`);
//       const profit = 1000;
//       const currency = 'RUB';
//
//       await Income.create({
//         date: date,
//         profit: profit,
//         currency: currency
//       });
//     }
//
//     console.log('Succesfully updated.');
//   } catch (error) {
//     console.error('Error while adding data:', error);
//   } finally {
//     await sequelize.close();
//   }
// }
//
// addIncomeRecords();

export default Income;