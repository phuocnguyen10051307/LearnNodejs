const express = require('express')
const router = express.Router();
const { handleGetHomePage , handleGetAbc} = require('../controllers/homeControllers')

// khai báo route
// router.METHOD('/route',handler)
// file route chỉ định nghĩa route 

router.get('/', handleGetHomePage)
router.get('/abc',handleGetAbc)

router.get('/hello', (req, res) => {
  res.send('<h1>hello world</h1>')
})

module.exports = router // exports default 