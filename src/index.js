import express from 'express'
import usuarioRouter from './routes/usuario.routes.js'
import libroRouter from './routes/libro.routes.js'
import prestamoRouter from './routes/préstamo.routes.js'
import resenaRouter from './routes/reseña.routes.js'
const app = express()
const port = 8080

app.use(express.json())
// Usar los routers
app.use('/usuario', usuarioRouter)
app.use('/libro', libroRouter)
app.use('/préstamo', prestamoRouter)
app.use('/reseña', resenaRouter)
//#region TODOS LOS ENDPOINTS
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor Express con todos los endpoints de la consigna!')
})

app.listen(port, () => {
     console.log(`Servidor Express escuchando en http://localhost:${port}`)
})
