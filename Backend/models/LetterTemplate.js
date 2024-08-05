// models/LetterTemplate.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');
const User = require('./Users');
const Addressee = require('./Addressee');

const LetterTemplate = db.define('lettertemplates', {
  template_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  template_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Template name is required',
      },
    },
  },
  template_content: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Template content is required',
      },
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',  // Ensure the correct key is referenced
    }
  },
  addressee_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Addressee,
      key: 'addressee_id',  // Reference to the Addressee model's primary key
    }
  },
}, {
  timestamps: true,
  createdAt: 'created_date',
  updatedAt: 'updated_date',
});
LetterTemplate.belongsTo(User, { foreignKey: 'user_id' });
LetterTemplate.belongsTo(Addressee, { foreignKey: 'addressee_id' });

module.exports = LetterTemplate;
