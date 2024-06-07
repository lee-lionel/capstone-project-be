const parentPost = require('../models/parentPost.models')
async function create(req, res) {
    try {
        const newPostContent = req.body
        const newPost = await parentPost.create(newPostContent)
        return res.status(201).json(newPost)
    }
    catch(error) {
        return res.status(500).json({error: error.message})
    }
}

async function getPosts(req, res) {
    try{
        const posts = await parentPost.find({})
        return res.status(200).json(posts)
    } catch(error) {
        return res.status(500).json({error: error.message})
    }
}

async function deletePost(req, res) {
    try {
        const { id } = req.params
        const deletedPost = await parentPost.findByIdAndDelete(id)
        if(!deletedPost) {
            return res.status(404).json({error: 'Post not found'})
        }
        res.json({message: 'Post deleted successfully'})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    create,
    getPosts,
    deletePost,
}