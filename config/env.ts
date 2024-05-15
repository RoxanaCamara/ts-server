import dotenv from 'dotenv';

declare namespace NodeJS {
    interface ProcessEnv {
        NAME_DB?: string;
        USER_DB?: string;
        PASSWORD_DB?: string;
        HOST_DB?: string;
        PORT_DB?: number;
    }
}


// Cargar las variables de entorno
dotenv.config();

// Exportar variables específicas si lo necesitas
export const NAME_DB = process.env.NAME_DB || '';
export const USER_DB = process.env.USER_DB || '';
export const PASSWORD_DB = process.env.PASSWORD_DB || '';
export const HOST_DB = process.env.HOST_DB || '';
export const PORT_DB = process.env.PORT_DB || 3305;
