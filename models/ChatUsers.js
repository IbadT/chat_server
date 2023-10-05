const pgDb = require('../config/db.js');
const Sequelize = require('sequelize');
const ChatModel = require('./ChatModel.js');
const UserModel = require('./UserModel.js');

const ChatUsers = pgDb.define(
    'chat_user',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
                key: 'id'
            }
        },
        chat_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: ChatModel,
                key: 'id'
            }
        }
    }
);

module.exports = ChatUsers;