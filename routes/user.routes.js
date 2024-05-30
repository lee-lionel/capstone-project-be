const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user.controllers')

router.post('/', userCtrl.create)

router.post('/sign-in', userCtrl.signIn)

module.exports = router