import { Request, Response } from "express"

export const getUsuario =(request: Request, response: Response)=> {
    const { id }= request.params

    response.json({
        msg: 'get usuario',
        id
    })
}


export const postUsuario =(request: Request, response: Response)=> {
    const { body }= request

    response.json({
        msg: 'post usuario',
        body
    })
}

export const putUsuario =(request: Request, response: Response)=> {
    const { id }= request.params
    const { body }= request

    response.json({
        msg: 'put usuario',
        id,
        body
    })
}

export const deleteUsuario =(request: Request, response: Response)=> {
    const { id }= request.params

    response.json({
        msg: 'delete usuario',
        id
    })
}