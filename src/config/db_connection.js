import {createPool} from "mysql2";

export const Pool = createPool(
     {
          host : '127.0.0.1', // Cambia esto por la dirección de tu servidor MySQL
          port : 3307, // Cambia esto por el puerto de tu servidor MySQL si
          user : 'root', // Cambia esto por tu usuario de MySQL
          password : 'ADMIN.0608', // Cambia esto por tu contraseña de MySQL
          database : 'clinica', // Cambia esto por el nombre de tu base de datos
          waitForConnections: true, // Espera a que haya conexiones disponibles
     }
)