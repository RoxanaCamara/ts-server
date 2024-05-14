import { Request, Response } from 'express';
import Usuario from '../db/usuario';

export const getUsuarios = async (request: Request, response: Response) => {
    const usuarios = await Usuario.findAll();
    response.json({
        msg: 'get usuarios',
        usuarios,
    });
};

export const getUsuario = async (request: Request, response: Response) => {
    const { id } = request.params;
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
        response.json({
            msg: 'get usuario',
            usuario,
        });
    }
    response.status(404).json({
        msg: `No existe un usuario con el id ${id}`,
    });
};

export const postUsuario = async (request: Request, response: Response) => {
    const { body } = request;
    console.log('nare', body);
    try {
        const usuario = Usuario.build(body);
        await usuario.save();

        response.json({
            msg: `Se pudo crear el usuario`,
            usuario,
        });
    } catch (error) {
        response.status(500).json({
            msg: `No se pudo crear el usuario`,
        });
    }
};

export const putUsuario = (request: Request, response: Response) => {
    const { id } = request.params;
    const { body } = request;

    response.json({
        msg: 'put usuario',
        id,
        body,
    });
};

export const deleteUsuario = (request: Request, response: Response) => {
    const { id } = request.params;

    response.json({
        msg: 'delete usuario',
        id,
    });
};
