const mysql = require("mysql2");
require("dotenv").config();
// create the connection to database 
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER, // default empty
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT, // default: 3306
// });
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, // default empty
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT, // default: 3306
});
module.exports = connection