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
  // total_revenue: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: null,
  // },
  // ppc_revenue: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: null,
  // },
  // seo_revenue: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: null,
  // },
  // total_lead_cost: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: null,
  // },
  // ppc_lead_cost: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: null,
  // },
  // seo_lead_cost: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: null,
  // },
  // total_lead_amount: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: null,
  // },
  // ppc_lead_amount: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: null,
  // },
  // seo_lead_amount: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: null,
  // },
});

export default User;