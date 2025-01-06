const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");

const studentSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    hobbies: {
      type: [String], // Array of strings
      enum: ["reading", "travelling", "sports"],
    },
    country: {
      type: String,
        enum: ["india", "usa", "uk"],
     
    },
    isActice: {
      type: Boolean,
      default: true,
    },
  },
  {
    timeStamp: true,
  }
);

const studentModal = mongoose.model("students", studentSchema);
module.exports = studentModal; 
