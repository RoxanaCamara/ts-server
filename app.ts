import Server from "./models/sever";
import dotenv from 'dotenv'

dotenv.config();
const server= new Server()
server.listen()