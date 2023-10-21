import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import User from "./UserModel.js";

const Activity = sequelize.define('Activity', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['task', 'insight']]
    },
  },
});

Activity.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Activity, { foreignKey: 'userId' });

export default Activity;