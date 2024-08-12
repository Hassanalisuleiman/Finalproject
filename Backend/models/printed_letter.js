// models/PrintedLetter.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as needed

const PrintedLetter = sequelize.define('PrintedLetter', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    templateName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    organizationName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shehiaName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataTime: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'Printed_letter',
    timestamps: false // Set to true if you want automatic createdAt and updatedAt fields
});

module.exports = PrintedLetter;
