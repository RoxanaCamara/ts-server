import { Sequelize } from 'sequelize';

const db = new Sequelize('node', 'root', 'Magikarp007', { host: '192.168.0.63', dialect: 'mysql', port: 3306 });

export default db;
