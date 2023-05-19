const mongoose = require("mongoose");

const Blog = new mongoose.Schema({
  author: {
    type: String,
    required: [true, "Author name must be provided"],
    trim: true,
    maxlength: [20, "Author name should contain less than 20 character"],
  },
  title: {
    type: String,
    required: [true, "Title Name should be provided"],
    trim: true,
    maxlength: [50, "Ttile name should contain less than 50 character"],
  },
  blog: {
    type: String,
    required: [true],
    trim: true,
  },

  crearedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("blog", Blog);
