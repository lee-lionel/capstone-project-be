const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

function createJWT(user) {
    return jwt.sign(
      { user },
      process.env.SECRET,
      { expiresIn: "24h" }
    );
  }

async function create(req, res) {
  try {
    const newUserDetails = req.body;
    const existingUsers = await User.find({ email: newUserDetails.email})
    if(existingUsers.length > 0) throw new Error ('User Already Exists')
    const newUser = await User.create(newUserDetails);
    const token = createJWT(newUser)
    return res.status(201).json({
        token: token,
        role: newUser.role
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
}

async function signIn(req, res) {
  try {
    const user = await User.findOne({
      $or: [
        {
          email: req.body.input,
        },
        {
          phoneNumber: req.body.input,
        },
      ],
    });
    console.log(user);
    if (!user) throw new Error('User not found');
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error('Incorrect Password');
    console.log("Sign in Successful");
    const token = createJWT(user)
    console.log(token)
    return res.status(201).json({
        token: token,
        role: user.role
    });
  } catch(error) {
    res.status(400).json({message: error.message});
  }
}

async function updateProfile(req, res) {
  try {
    const { id } = req.params;
    const updatedProfile = await User.findByIdAndUpdate(id.trim(), req.body, {
      new: true,
    });
    res.status(200).json(updatedProfile);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getProfile(req, res) {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function listTutors(req, res) {
  try {
    const tutors = await User.find({ role: "tutor", showProfile: true });
    res.status(200).json(tutors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = {
  create,
  signIn,
  updateProfile,
  getProfile,
  listTutors,
};
