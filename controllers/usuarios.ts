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

    const existeEmail = await Usuario.findOne({
        where: {
            email: body.email,
        },
    });

    if (existeEmail) {
        response.status(400).json({
            msg: 'Ya existe un usuario con el email ' + body.email,
        });
    } else {
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
    }
};

export const putUsuario = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { body } = request;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
        response.status(400).json({
            msg: 'No existe un usuario con ese email ',
        });
    } else {
        try {
            await usuario.update(body);

            response.json({
                msg: `Se pudo actualizar el usuario`,
                usuario,
            });
        } catch (error) {
            response.status(500).json({
                msg: `No se pudo crear el usuario`,
            });
        }
    }
};

export const deleteUsuario = async (request: Request, response: Response) => {
    const { id } = request.params;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
        response.status(400).json({
            msg: 'No existe ese usuario ',
        });
    } else {
        try {
            await usuario.update({ state: 2});

            response.json({
                msg: `Se borro el usuario correctamente`,
                usuario,
            });
        } catch (error) {
            response.status(500).json({
                msg: `No se puede borrar el usuario`,
            });
        }
    }

};
