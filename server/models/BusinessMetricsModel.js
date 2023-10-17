import { DataTypes } from "sequelize";
import sequelize from '../config/database.js';
import User from "./UserModel.js";

const BusinessMetrics = sequelize.define('BusinessMetrics', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  totalRevenueGoal: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  ppcRevenueGoal: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  seoRevenueGoal: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  totalLeadCostGoal: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  ppcLeadCostGoal: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  seoLeadCostGoal: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  totalLeadAmountGoal: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  ppcLeadAmountGoal: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  seoLeadAmountGoal: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
});

User.hasOne(BusinessMetrics, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  }
});

BusinessMetrics.belongsTo(User, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  }
});

export default BusinessMetrics;