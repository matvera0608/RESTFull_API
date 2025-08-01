import express from 'express'
const app = express()
const port = 8080

app.use(express.json())

//#region TODOS LOS ENDPOINTS
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor Express con todos los endpoints de la consigna!')
})

app.listen(port, () => {
     console.log(`Servidor Express escuchando en http://localhost:${port}`)
})