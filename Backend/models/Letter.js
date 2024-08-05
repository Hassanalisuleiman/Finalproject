// models/Letter.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Citizen = require('./Citizen');
const Addressee = require('./Addressee');
const LetterTemplate = require('./LetterTemplate');
const User = require('./Users');

const Letter = db.define('letters', {
  letter_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  citizen_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Citizen,
      key: 'citizen_id'
    }
  },
  addressee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Addressee,
      key: 'addressee_id'
    }
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Title is required',
      },
    },
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Photo is required',
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
  template_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: LetterTemplate,
      key: 'template_id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id'
    }
  },
}, {
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
});

// Associations
Letter.belongsTo(Citizen, { foreignKey: 'citizen_id' });
Letter.belongsTo(Addressee, { foreignKey: 'addressee_id' });
Letter.belongsTo(LetterTemplate, { foreignKey: 'template_id' });
Letter.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Letter;
