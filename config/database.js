/**
 * Este archivo se encarga de configurar la conexión a la base de datos.
 */
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST|| '127.0.0.1',
    dialect: "mysql",
    port: process.env.DB_PORT || 3307, // Especifica el puerto correcto aquí
  },
  test: {
    username: "root",
    password: null,
    database: "parkingdb",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
