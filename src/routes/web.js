const express = require('express')
const router = express.Router();

// khai báo route
router.get('/', (req, res) => {
  res.render('example')
})
router.get('/abc', (req, res) => {
  res.send('my name is phuoc ')
})

router.get('/hello', (req, res) => {
  res.send('<h1>hello world</h1>')
})

module.exports = router // exports default 