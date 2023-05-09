const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  tecnologies: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: [
    {
      type: String,
      required: true,
      default: []
    },
  ],
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Post", PostSchema);
