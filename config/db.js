require('dotenv').config();
const Sequelize = require('sequelize');

const { DBNAME, DBUSERNAME, DBPASSWORD, DBHOST } = process.env;

const pgDb = new Sequelize(
    DBNAME, 
    DBUSERNAME, 
    DBPASSWORD, 
    {
        host: DBHOST,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // <<<<<<< YOU NEED THIS
            }
        }
    }
);

module.exports = pgDb;