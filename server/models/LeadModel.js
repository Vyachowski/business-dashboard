import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import User from "./UserModel.js";

const Lead = sequelize.define('Lead', {
  date: {
    type: DataTypes.DATEONLY,
    primaryKey: true,
    allowNull: false,
    unique: {
      name: 'uniqueDatePerUser',
      msg: 'Date must be unique per user'
    }
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  // source: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   validate: {
  //     isIn: {
  //       args: [['SEO', 'PPC']],
  //       msg: "Source must be either 'SEO' or 'PPC'"
  //     }
  //   }
  // },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Lead.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Lead, { foreignKey: 'userId' });

export default Lead;