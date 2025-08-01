import {Router} from "express"
import {
     obtenerLibros,
     crearLibros,
     eliminarLibros,
     actualizarLibros,
     obtenerLibrosPorID
} from "../controller/libro.controller.js"

const router = Router()

router.get('/libros', obtenerLibros)
router.get('/libros/:id', obtenerLibrosPorID)
router.post('/libros', crearLibros)
router.put('/libros/:id', actualizarLibros)
router.delete('/libros/:id', eliminarLibros)

export default router