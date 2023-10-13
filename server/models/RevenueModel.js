import {DataTypes} from "sequelize";
import sequelize from "../config/database.js";
import User from "./UserModel.js";

const Revenue = sequelize.define('Income', {
  date: {
    type: DataTypes.DATEONLY,
    primaryKey: true,
    allowNull: false,
    unique: {
      name: 'uniqueDatePerUser',
      msg: 'Date must be unique per user'
    }
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

Revenue.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Revenue, {foreignKey: 'userId'});

export default Revenue;
