const express = require('express')
const router = express.Router()
const postCtrl = require('../controllers/posts.controllers')

router.post('/create', postCtrl.create)

router.get('/', postCtrl.getPosts)

router.delete('/delete/:id', postCtrl.deletePost)

router.put('/tutor-apply/:id', postCtrl.applyToPost)

router.put('/update/:id',postCtrl.updateStatus)

router.get('/my-posts/:id', postCtrl.getUserPosts)

module.exports = router