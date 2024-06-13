const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
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
    phoneNumber: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 8,
    },
    role: {
      type: String,
      enum: ["tutor", "parent"],
      required: true,
    },
    experience: {
      type: Number,
    },
    subjects: {
      type: [String],
      enum: [
        "English",
        "Mathematics",
        "Chinese",
        "Malay",
        "Tamil",
        "Science",
        "Principle of Accounts",
        "Chemistry",
        "Biology",
        "Physics",
        "History",
        "Geography",
      ],
    },
    levels: {
      type: [String],
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
      ],
    },
    location: {
      type: String,
      enum: ["North", "North-East", "Central", "East", "West"],
    },
    feedback: [
      {
        sentBy: {
          type: String,
        },
        rating: {
          type: Number,
          min: 0,
          max: 5,
        },
        text: {
          type: String,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    showProfile: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

const User = mongoose.model("User", userSchema);
module.exports = User;
