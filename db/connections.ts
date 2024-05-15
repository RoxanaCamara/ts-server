import { Sequelize } from 'sequelize';
import { HOST_DB, NAME_DB, PASSWORD_DB, PORT_DB, USER_DB } from '../config/env';

const db = new Sequelize(NAME_DB, USER_DB, PASSWORD_DB, { host: HOST_DB, dialect: 'mysql', port: Number(PORT_DB) });

export default db;
