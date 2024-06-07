const express = require('express')
const router = express.Router()
const postCtrl = require('../controllers/posts.controllers')

router.post('/create', postCtrl.create)

router.get('/', postCtrl.getPosts)

router.delete('/delete/:id', postCtrl.deletePost)