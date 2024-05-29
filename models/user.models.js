const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unqiue: true,
        trim: true,
        lowercase: true,
        required: true,
    },
    password: {
        type: String, 
        trim: true,
        minLength: 5,
        required: true,
    },
    role: {
        type: String,
        enum: ['tutor','parent'],
        required: true
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)
module.exports = User