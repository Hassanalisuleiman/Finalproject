// models/GovernmentOrder.js

const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./Users'); // Import the User model

const GovernmentOrder = db.define('governmentorders', {
  order_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  order_type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Order type is required',
      },
    },
  },
  house_no: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'House number is required',
      },
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Date is required',
      },
    },
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Status is required',
      },
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // This is a reference to another model
      key: 'user_id', // This is the column name of the referenced model
    },
    validate: {
      notEmpty: {
        msg: 'User ID is required',
      },
    },
  },
},
{
    timestamps: true,
    createdAt: 'created_date',
    updatedAt: 'updated_date',
  }
);

// Define the association
GovernmentOrder.belongsTo(User, { foreignKey: 'user_id' });
// User.hasMany(GovernmentOrder, { foreignKey: 'user_id' });

module.exports = GovernmentOrder;
