const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user.controllers')

router.post('/', userCtrl.create)

router.post('/sign-in', userCtrl.signIn)

router.put('/update/:id', userCtrl.updateProfile)

router.get('/list-tutors', userCtrl.listTutors)

router.get('/getMe/:id', userCtrl.getProfile)

module.exports = router