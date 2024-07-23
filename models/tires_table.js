'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Tire extends Model {
        static associate(models) {
            // define association here
        }
    }
    Tire.init({
        tire_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        brand_name: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            // allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        tread_pattern: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Tire',
        tableName: 'tires_table', 
        timestamps: false,
    });
    return Tire;
};
