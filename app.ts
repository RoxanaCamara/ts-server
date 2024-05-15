import Server from './models/sever';
import dotenv from 'dotenv';

dotenv.config();


export const server = new Server();

server.listen();
