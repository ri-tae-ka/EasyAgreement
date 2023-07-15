const mongoose = require("mongoose");

const summarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name."],
    maxLength: [25, "Name cannot exceed 25 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter a description."],
    maxLength: [100, "Name cannot exceed 100 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  summary: {
    type: String,
    required: [true, "Please enter a summary."],
  },
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
});

module.exports = mongoose.model("Summary", summarySchema);
