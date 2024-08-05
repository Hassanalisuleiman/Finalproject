// models/ConflictRecord.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./Users');
// const Citizen = require('./Citizen');

const ConflictRecord = db.define('conflictrecords', {
  conflict_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  characters: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Characters are required',
      },
    },
  },
  reasons: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Reasons are required',
      },
    },
  },
  solutions: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Solutions are required',
      },
    },
  },
  // citizen_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: Citizen,
  //     key: 'id',
  //   },
  //   validate: {
  //     notEmpty: {
  //       msg: 'Citizen ID is required',
  //     },
  //   },
  // },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',  // Ensure the correct key is referenced
    }
  },
}, {
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
});

// Define the association
// ConflictRecord.belongsTo(Citizen, { foreignKey: 'citizen_id' });
ConflictRecord.belongsTo(User, { foreignKey: 'user_id' });

module.exports = ConflictRecord;
