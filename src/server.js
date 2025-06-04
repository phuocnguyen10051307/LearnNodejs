const express = require("express"); // common js
const path = require("path");
const app = express(); // app express
require("dotenv").config();
const port = process.env.PORT; // port
const connection = require('./config/database')
// console.log(process.env)
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
// config template engine
configViewEngine(app);
//khai báo routes
app.use("/", webRoutes);
// connection.query("select * from users", function (err, results, fields) {
//   console.log(results);// results lấy dữ liệu 
//   console.log(fields);// hiện cột định nghĩa trong database
// });

// test connection

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
