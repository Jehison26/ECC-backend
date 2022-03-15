const conexion = require("../config/conexionBD.js")

module.exports = 
{
  insertar(nombre,tipo_documento,numero_documento) {
    return new Promise((resolve, reject) => {
      conexion.query(`insert into users
      (nombre,tipo_documento,numero_documento)
      values
      (?, ?, ?)`,
        [nombre,tipo_documento,numero_documento], (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
          });
    });
  },
  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(`select * from users`,
        (err, resultados) => {
            if (err) reject(err);
            else resolve(resultados);
        });
    });
  },
  obtenerPorId(id) {
    return new Promise((resolve, reject) => {
      conexion.query(`select * from users where id_user = ?`,
        [id],
        (err, resultados) => {
          console.log(resultados[0]);
          if (err) reject(err);
          else resolve(resultados[0]);
          });
    });
  },
  actualizar(id,nombre,tipo_documento,numero_documento) {
      return new Promise((resolve, reject) => {
          conexion.query(`update users
          set nombre = ?,
          tipo_documento = ?,
          numero_documento = ?
          where id_user = ?`,
              [nombre, tipo_documento, numero_documento, id],
              (err) => {
                  if (err) reject(err);
                  else resolve();
              });
      });
  },
  eliminar(id) {
      return new Promise((resolve, reject) => {
          conexion.query(`delete from users
          where id_user = ?`,
              [id],
              (err) => {
                  if (err) reject(err);
                  else resolve();
              });
      });
  },
}