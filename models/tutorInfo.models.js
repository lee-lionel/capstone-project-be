const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user.models");

const levelSchema = new Schema({
  name: {
    type: String,
    enum: [
      "Pri 1",
      "Pri 2",
      "Pri 3",
      "Pri 4",
      "Pri 5",
      "Pri 6",
      "Sec 1",
      "Sec 2",
      "Sec 3",
      "Sec 4",
      "JC 1",
      "JC 2",
      "Poly 1",
      "Poly 2",
      "Poly 3",
    ],
  },
});

const subjectSchema = newSchema({
  name: {
    type: String,
  },
  levels: [levelSchema],
});

const tutorSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    experience: {
      type: Number,
    },
    subjects: [subjectSchema],
    location: {
      type: String,
      enum: ["North", "North-East", "Central", "East", "West"],
    },
    feedback: [
      {
        sentBy: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
        },
        text: {
            type: String
        },
        timestamp: {
            type: Date,
            default: Date.now,
        }
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Tutor = mongoose.model("Tutor", tutorSchema);

module.exports = Tutor;
