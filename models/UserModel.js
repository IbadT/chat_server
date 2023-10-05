const pgDb = require('../config/db.js');
const Sequelize = require('sequelize');

const UserModel = pgDb.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }
);

module.exports = UserModel;