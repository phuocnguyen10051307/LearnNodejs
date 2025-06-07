const express = require('express')
const router = express.Router();
const { handleGetHomePage , handleGetAbc,postCreateUser} = require('../controllers/homeControllers')

// khai báo route
// router.METHOD('/route',handler)
// file route chỉ định nghĩa route 

router.get('/', handleGetHomePage)
router.get('/abc',handleGetAbc)

router.post('/create-user',postCreateUser)

module.exports = router // exports default 