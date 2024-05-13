import express, { Application } from 'express';
import userRoutes from '../routes/usuarios';
import cors from 'cors';
import db from '../db/connections';

class Server {
    private app: Application;
    private port: string;
    private apiPath = {
        usuarios: '/api/usuarios',
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8008';
        this.routers();
        this.middlewares();
        this.dbConnections();
    }

    routers() {
        this.app.use(this.apiPath.usuarios, userRoutes);
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    async dbConnections() {
        try {
            db.authenticate();
            console.log('DB conection online');
        } catch (error) {
            throw new Error('error');
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port);
        });
    }
}

export default Server;
