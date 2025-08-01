export const obtenerReseña = (peticion, respuesta) => {
  respuesta.send('Obtener todas las reseñas')
}

export const crearReseña = (peticion, respuesta) => {
  const nuevaReseña = peticion.body
  respuesta.send(`Crear un nueva reseña: ${JSON.stringify(nuevaReseña)}`)
}

export const eliminarReseña = (peticion, respuesta) => {
  respuesta.send('Eliminar una reseña')
}

export const actualizarReseña = (peticion, respuesta) => {
  respuesta.send('Actualizar reseña')
}

export const obtenerReseñaPorID = (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send(`Obtener reseña por ID: ${JSON.stringify(id)}`)
}

module.exports
{
     obtenerReseña,
     crearReseña,
     eliminarReseña,
     actualizarReseña
}