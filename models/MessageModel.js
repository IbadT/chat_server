const pgDb = require('../config/db.js');
const Sequelize = require('sequelize');
const UserModel = require('./UserModel.js');

const MessageModel = pgDb.define(
    'message',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        chat: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        author: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
                key: 'id'
            }
        },
        text: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }
);

module.exports = MessageModel;