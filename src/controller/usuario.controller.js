export const obtenerUsuarios = (peticion, respuesta) => {
  respuesta.send('Obtener todos los usuarios')
}

export const obtenerUsuariosPorID = (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send(`Obtener un usuario por ID: ${id}`)
}

export const crearUsuarios = (peticion, respuesta) => {
  const nuevoUsuario = peticion.body
  respuesta.send(`Crear un nuevo usuario: ${JSON.stringify(nuevoUsuario)}`)
}

export const eliminarUsuarios = (peticion, respuesta) => {
  const id = peticion.params.id
  respuesta.send(`Eliminar un usuario por ID: ${id}`)
}

export const actualizarUsuarios = (peticion, respuesta) => {
  const id = peticion.params.id
  const usuarioActualizado = peticion.body
  respuesta.send(`Actualizar usuario por ID: ${id} con datos: ${JSON.stringify(usuarioActualizado)}`)
}

module.exports = {
     obtenerUsuarios,
     crearUsuarios,
     eliminarUsuarios,
     actualizarUsuarios
}