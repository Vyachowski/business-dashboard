import {DataTypes} from "sequelize";
import sequelize from '../config/database.js';
import User from "./User.js";

const BusinessMetrics = sequelize.define('BusinessMetrics', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true // primary key based on user id
    },
    total_revenue: {
        type: DataTypes.INTEGER,
    },
    ppc_revenue: {
        type: DataTypes.INTEGER,
    },
    seo_revenue: {
        type: DataTypes.INTEGER,
    },
    total_lead_cost: {
        type: DataTypes.INTEGER,
    },
    ppc_lead_cost: {
        type: DataTypes.INTEGER,
    },
    seo_lead_cost: {
        type: DataTypes.INTEGER,
    },
    total_lead_amount: {
        type: DataTypes.INTEGER,
    },
    ppc_lead_amount: {
        type: DataTypes.INTEGER,
    },
    seo_lead_amount: {
        type: DataTypes.INTEGER,
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