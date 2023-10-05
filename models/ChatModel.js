const pgDb = require('../config/db.js');
const Sequelize = require('sequelize');

const ChatModel = pgDb.define(
    'chat',
    {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    users_array: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
        require: true
    }
});

module.exports = ChatModel;