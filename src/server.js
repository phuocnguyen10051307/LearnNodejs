const express = require('express')// common js
const path = require('path') 
const app = express()// app express 

require('dotenv').config();
const port = process.env.PORT; // port 
// console.log(process.env)



// config template engine
// // paht.join là thư viên tìm kiếm 1 file trên hệ thống đã có sẵn trong js 
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))


// khai báo route
app.get('/', (req, res) => {
  res.render('example')
})
app.get('/abc', (req, res) => {
  res.send('my name is phuoc ')
})

app.get('/hello', (req, res) => {
  res.send('<h1>hello world</h1>')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})