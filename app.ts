import Server from "./models/sever";
import dotenv from 'dotenv'

console.log('Hola Nare')

dotenv.config();
const server= new Server()
server.listen()