import {DataTypes} from "sequelize";
import sequelize from "../config/database.js";
import User from "./UserModel.js";

const Revenue = sequelize.define('Revenue', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  profit: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [['SEO', 'PPC']],
        msg: "Source must be either 'SEO' or 'PPC'"
      }
    }
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  }
  },
  {
    tableName: 'Revenue'
  });

Revenue.belongsTo(User, {foreignKey: 'userId'});
User.hasMany(Revenue, {foreignKey: 'userId'});

export default Revenue;
