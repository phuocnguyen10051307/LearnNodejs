const express = require('express')// common js
const path = require('path') 
const app = express()// app express 
require('dotenv').config();
const port = process.env.PORT; // port 
// console.log(process.env)

const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
// config template engine 
configViewEngine(app);
//khai báo routes
app.use('/test',webRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})