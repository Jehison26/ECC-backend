const mysql = require("mysql");
// Coloca aquí tus credenciales
module.exports = mysql.createPool({
  host     : 'b2lfwyzqselef4t5ih5k-mysql.services.clever-cloud.com',
  user     : 'ullz68qkmyrxi8y4',
  password : '0k2OBVWCTv7O9CPV2s10',
  database: 'b2lfwyzqselef4t5ih5k'
});

