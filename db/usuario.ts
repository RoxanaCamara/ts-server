import { DataTypes } from 'sequelize';
import db from './connections';

const Usuario = db.define('usuario', {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
});

export default Usuario;
