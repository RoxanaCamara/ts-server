import { Sequelize } from 'sequelize';

const NAME_DB = process.env.NAME_DB || '';
const USER = process.env.USER || '';
const PASSWORD = process.env.PASSWORD || '';

const db = new Sequelize(NAME_DB, USER, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;
