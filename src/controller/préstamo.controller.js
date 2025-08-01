export const obtenerPréstamos = (peticion, respuesta) => {
  respuesta.send('Obtener todos los préstamos')
}

export const crearPréstamos = (peticion, respuesta) => {
  const nuevoPréstamo = peticion.body
  respuesta.send(`Crear un nuevo préstamo: ${JSON.stringify(nuevoPréstamo)}`)
}

export const eliminarPréstamos = (peticion, respuesta) => {
  respuesta.send('Eliminar un préstamo')
}

export const actualizarPréstamos = (peticion, respuesta) => {
  respuesta.send('Actualizar préstamo')
}

export const obtenerPréstamosPorID = (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send(`Obtener préstamo por ID: ${JSON.stringify(id)}`)
}

module.exports
{
     obtenerPréstamos,
     crearPréstamos,
     eliminarPréstamos,
     actualizarPréstamos,
     obtenerPréstamosPorID
}