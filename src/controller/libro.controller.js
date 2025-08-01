export const obtenerLibros = (peticion, respuesta) => {
  respuesta.send('Obtener todos los libros')
}

export const crearLibros = (peticion, respuesta) => {
  const nuevoLibro = peticion.body
  respuesta.send(`Crear un nuevo libro: ${JSON.stringify(nuevoLibro)}`)
}

export const eliminarLibros = (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send(`Eliminar un libro por ID: ${id}`)
}

export const actualizarLibros = (peticion, respuesta) => {
  const id = peticion.params.id
  const libroActualizado = peticion.body
  respuesta.send(`Actualizar libro por ID: ${id} con datos: ${JSON.stringify(libroActualizado)}`)
}

export const obtenerLibrosPorID = (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send(`Obtener libro por ID: ${id}`)
}

module.exports = {
     obtenerLibros,
     crearLibros,
     eliminarLibros,
     actualizarLibros,
     obtenerLibrosPorID
}