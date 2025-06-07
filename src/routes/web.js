const express = require('express')
const router = express.Router();
const { handleGetHomePage , handleGetAbc,postCreateUser,getCreateHome, getEdit} = require('../controllers/homeControllers')

// khai báo route
// router.METHOD('/route',handler)
// file route chỉ định nghĩa route 

router.get('/', handleGetHomePage)
router.get('/abc',handleGetAbc)
router.get('/create',getCreateHome)
router.get('/edit/:id',getEdit)
router.post('/create-user',postCreateUser)
//router.delete('/delete-user',deleteUser)

module.exports = router // exports default 