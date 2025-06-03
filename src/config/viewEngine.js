// config template engine
// // paht.join là thư viên tìm kiếm 1 file trên hệ thống đã có sẵn trong js
const express = require('express')
const path = require('path') 
const configViewEngine = (app) => {
  console.log(path.join(__dirname, "../views"))
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");
  app.use(express.static(path.join(__dirname, "../public")));
};
module.exports = configViewEngine
