const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

//#region TODOS LOS ENDPOINTS
//Usuarios
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor Express con todos los endpoints de la consigna!')
})

app.get('/usuarios', (peticion, respuesta) => {
  respuesta.send('Obtener todos los usuarios')
})

app.get('/usuarios/:id', (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send(`Obtener un usuario por su id_usuario ${id}`)
})

app.post('/usuarios', (peticion, respuesta) => {
  const nuevoUsuario = peticion.body
  respuesta.send(`Crear un nuevo usuario: ${nuevoUsuario}`)
})

app.put('/usuarios/:id', (peticion, respuesta) => {
  const id = peticion.params.id
  const usuarioActualizado = peticion.body
  respuesta.send(`Actualizar los datos de un usuario: ${id}` + JSON.stringify(usuarioActualizado))
})

app.delete('/usuarios/:id', (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send('Eliminar un usuario')
})

//Libros
app.get('/libros', (peticion, respuesta) => {
  respuesta.send('Obtener todos los libros')
})

app.get('/libros/:id', (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send(`Obtener un libro por su id_libro ${id}`)
})

app.post('/libros', (peticion, respuesta) => {
  const nuevoLibro = peticion.body
  respuesta.send(`Crear un nuevo libro: ${nuevoLibro}`)
})

app.put('/libros/:id', (peticion, respuesta) => {
  const id = peticion.params.id
  const libroActualizado = peticion.body
  respuesta.send(`Actualizar los datos de un usuario: ${id} ` + JSON.stringify(libroActualizado))
})

app.put('/libros/:id/existencia', (peticion, respuesta) => {
  const id = peticion.params.id
  const libroActualizado = peticion.body
  const existencia = peticion.body
  respuesta.send(`Actualizar la existencia de un libro: ${id} ` + JSON.stringify(libroActualizado) + JSON.stringify(existencia))
})

app.delete('/libros/:id', (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send('Eliminar un libro')
})

//Préstamos
app.get('/préstamos', (peticion, respuesta) => {
  respuesta.send('Obtener todos los préstamos')
})

app.get('/préstamos/:id', (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send(`Obtener un préstamo por su id_libro ${id}`)
})

app.post('/préstamos/:id', (peticion, respuesta) => {
  const reservaLibro = peticion.body
  respuesta.send(`Crear un nuevo préstamo: ${reservaLibro}`)
})

app.put('/préstamos/:id', (peticion, respuesta) => {
  const id = peticion.params.id
  const préstamoActualizado = peticion.body
  respuesta.send(`Actualizar los datos de un préstamo: ${id} ` + JSON.stringify(préstamoActualizado))
})

app.delete('/préstamos/:id', (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send('Eliminar un préstamo')
})

//Reseñas
app.get('/reseñas', (peticion, respuesta) => {
  respuesta.send('Obtener todas las reseñas')
})

app.get('/reseñas/:id', (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send(`Obtener una reseña por su id_reseña ${id}`)
})

app.get('/resenias/libro/:id_libro', (peticion, respuesta) => {
  const nuevoLibro = peticion.body
  respuesta.send(`Obtener reseñas de un libro específico: ${nuevoLibro}`)
})

app.post('/reseñas', (peticion, respuesta) => {
  const nuevaReseña = peticion.body
  respuesta.send(`Crear una nueva reseña ${nuevaReseña}`)
})

app.put('/reseñas/:id', (peticion, respuesta) => {
  const id = peticion.params.id
  const libroActualizado = peticion.body
  const existencia = peticion.body
  respuesta.send(`Actualizar una reseña existente: ${id}, ${libroActualizado}, ${existencia}`)
})

app.delete('/resenias/:id', (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send(`Eliminar un libro ${id}`)
})

//Lógica específica
app.get('/libros/disponibles', (peticion, respuesta) => {
  respuesta.send('Obtener todos los libros con existencia disponible para préstamos')
})

app.get('/préstamos/usuario/:id_usuario', (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send(`Obtener todos los préstamos de un usuario específico ${id}`)
})

app.get('/préstamos/libro/:id_libro', (peticion, respuesta) => {
  const id = peticion.body
  respuesta.send(`Obtener todos los préstamos realizados para un libro específico ${id}`)
})

//#endregion

app.listen(port, () => {
     console.log(`Servidor Express escuchando en http://localhost:${port}`)
})