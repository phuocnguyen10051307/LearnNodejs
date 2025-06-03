const express = require('express')// common js
const path = require('path') 
const app = express()// app express 
const port = 8000; // port 

// config template engine
app.set('views',path.join(__dirname,'views'))
// paht.join là thư viên tìm kiếm 1 file trên hệ thống đã có sẵn trong js 
app.set('view engine', 'ejs')

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