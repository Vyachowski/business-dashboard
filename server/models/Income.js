import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

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

export default Income;