import { DataTypes } from "sequelize";
import sequelize from '../config/database.js';
import User from "./UserModel.js";

const BusinessMetrics = sequelize.define('BusinessMetrics', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  total_revenue: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  ppc_revenue: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  seo_revenue: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  total_lead_cost: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  ppc_lead_cost: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  seo_lead_cost: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  total_lead_amount: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  ppc_lead_amount: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  seo_lead_amount: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
});

User.hasOne(BusinessMetrics, {
  foreignKey: {
    name: 'userId',
    allowNull: false
  }
});

BusinessMetrics.belongsTo(User, {
  foreignKey: {
    name: 'userId',
    allowNull: false
  }
});

export default BusinessMetrics;