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


module.exports = {
    create,
    signIn
}