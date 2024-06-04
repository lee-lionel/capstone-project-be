const mongoose = require('mongoose')
const Schema = mongoose.Schema

const parentPost = new Schema({
    title: {
        type: String,
        required: true,
    },
    subject: {
        type: [String],
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        enum: ["North", "North-East", "Central", "East", "West"],
    },
    applicants: {
        type: [String],
    },
    foundTutor: {
        type: Boolean,
        default: false
    }
})

const ParentPost = mongoose.model("parentPost", parentPost)
module.exports = ParentPost