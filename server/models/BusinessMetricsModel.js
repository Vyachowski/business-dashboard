import { DataTypes } from "sequelize";
import sequelize from '../config/database.js';
import User from "./UserModel.js";

const BusinessMetrics = sequelize.define('BusinessMetrics', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false,
  },
  totalRevenue: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  ppcRevenue: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  seoRevenue: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  totalLeadCost: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  ppcLeadCost: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  seoLeadCost: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  totalLeadAmount: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  ppc_lead_amount: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  seoLeadAmount: {
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