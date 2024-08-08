const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Shehia = sequelize.define('Shehia', {
    shehia_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    shehia_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'shehia',
    timestamps: true,
    createdAt: 'created_date',
    updatedAt: 'updated_date'
});

module.exports = Shehia;
