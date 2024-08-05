const { DataTypes } = require('sequelize');
const db = require('../config/database');

const User = db.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: 'Username is required',
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Password is required',
      },
    },
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'First name is required',
      },
    },
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Last name is required',
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
  role: {
    type: DataTypes.ENUM('admin', 'sheha', 'citizen'),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Role is required',
      },
    },
  },
}, {
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
});

module.exports = User;
