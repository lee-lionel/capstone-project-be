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
        const posts = await parentPost.find({foundTutor: false})
        return res.status(200).json(posts)
    } catch(error) {
        return res.status(500).json({message: error.message})
    }
}

async function getUserPosts (req, res) {
    const {id} = req.params
    try {
        const userPosts = await parentPost.find({"createdBy.id": id})
        return res.status(200).json(userPosts)
    } catch (error) {
        return res.status(500).json({message: error.message})
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

async function applyToPost(req, res) {
    try {
      const { id } = req.params;
      const applicant = req.body;
  
      const appliedPost = await parentPost.findById(id);
      if (!appliedPost) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      const applicantIndex = appliedPost.applicants.findIndex(app => app.id.toString() === applicant.id);
  
      if (applicantIndex !== -1) throw new Error('You have already applied for this job')
        appliedPost.applicants.push(applicant);
      
  
      await appliedPost.save();
  
      res.status(201).json(appliedPost);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async function updateStatus(req, res) {
    try {
        const { id } = req.params;
        const { foundTutor } = req.body;  
    
        const updatedPost = await parentPost.findByIdAndUpdate(
          id,
          { foundTutor },
          { new: true }
        );
    
        if (!updatedPost) {
          return res.status(404).json({ message: 'Post not found' });
        }
    
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  

module.exports = {
    create,
    getPosts,
    deletePost,
    applyToPost,
    updateStatus,
    getUserPosts,
}