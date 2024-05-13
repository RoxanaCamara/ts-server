import { DataTypes } from 'sequelize';
import db from './connections';

const Usuario = db.define('Usuario', {
    nombre: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    estado: { type: DataTypes.STRING },
});

export default Usuario;
