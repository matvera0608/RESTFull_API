import {Router} from "express"
import {
     obtenerPréstamos, 
     obtenerPréstamosPorID,
     crearPréstamos, 
     actualizarPréstamos, 
     eliminarPréstamos
} from "../controller/préstamo.controller.js"

const router = Router()

router.get('/préstamos', obtenerPréstamos)
router.get('/préstamos/:id', obtenerPréstamosPorID)
router.post('/préstamos', crearPréstamos)
router.put('/préstamos/:id', actualizarPréstamos)
router.delete('/préstamos/:id', eliminarPréstamos)

export default router