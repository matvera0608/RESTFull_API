import {Router} from "express"
import {
     obtenerUsuarios, 
     obtenerUsuariosPorID,
     crearUsuario, 
     actualizarUsuario,
     eliminarUsuario
     } from "../controller/usuario.controller.js"

const router = Router()

router.get('/usuarios', obtenerUsuarios)
router.get('/usuarios/:id', obtenerUsuariosPorID)
router.post('/usuarios', crearUsuario)
router.put('/usuarios/:id', actualizarUsuario)
router.delete('/usuarios/:id', eliminarUsuario)

export default router