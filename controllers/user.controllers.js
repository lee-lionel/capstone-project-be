const User = require('../models/user.models')
const bcrypt = require('bcrypt')

async function create (req, res) {
    try {
        const newUserDetails = req.body;
        const newUser = await User.create(newUserDetails)
        return res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: error.message})
    }
}

async function signIn(req, res) {
    try { 
        const user = await User.findOne({ email: req.body.email})
        console.log(user)
        if(!user) throw new Error()
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        console.log('Sign in Successful')
        res.status(201).send(user)
    } catch {
        res.status(400).json("Bad Credentials")
    }
}

async function updateProfile(req, res) {
    try {
        const {id} = req.params
        const updatedProfile = await User.findByIdAndUpdate(
            id.trim(),
            req.body,
            {new: true}
        )
        res.status(200).json(updatedProfile)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

async function getProfile(req, res) {
    try {
        const user = await User.find({_id: req.params})
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

async function listTutors(req, res) {
    try {
        const tutors = await User.find({ role: 'tutor'})
        res.status(200).json(tutors)
    } catch(error) {
        res.status(500).json({error : error.message})
    }
}

async function addFeedback(req, res) {
    try {
        const {id} = req.params
        const feedback = req.body

        const user = await User.findById(id)
        user.feedback.push(feedback)
        await user.save()

        res.json({message : 'Feedback added successfully'})
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
}




module.exports = {
    create,
    signIn,
    updateProfile,
    getProfile,
    listTutors,
    addFeedback
}