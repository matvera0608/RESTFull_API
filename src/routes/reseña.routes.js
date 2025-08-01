import {Router} from "express"
import {
     obtenerReseña, 
     obtenerReseñaPorID, 
     crearReseña, 
     actualizarReseña, 
     eliminarReseña
} from "../controller/reseña.controller.js"

const router = Router()

router.get('/reseñas', obtenerReseña)
router.get('/reseñas/:id', obtenerReseñaPorID)
router.post('/reseñas', crearReseña)
router.put('/reseñas/:id', actualizarReseña)
router.delete('/reseñas/:id', eliminarReseña)

export default router