const express = require('express')// common js 
const app = express()// app express 
const port = 8000; // port 



// khai báo routes 
app.get('/', (req, res) => {
  res.send('Hello World!')
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