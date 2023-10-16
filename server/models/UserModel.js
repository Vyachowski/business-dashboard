import sequelize from '../config/database.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  fullName: {
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
  },
  isActivated: {
    type: DataTypes.BOOLEAN,
    default: false,
    allowNull: false,
  },
  activationLink: {
    type: DataTypes.STRING,
    default: "",
    allowNull: false,
  }
});

export default User;