import { Router } from "express";
import { deleteUsuario, getUsuarios, postUsuario, putUsuario } from "../controllers/usuarios";

const router =  Router()

router.get('/', getUsuarios)
router.post('/', postUsuario)
router.put('/:id', putUsuario)
router.delete('/:id', deleteUsuario)


export default router