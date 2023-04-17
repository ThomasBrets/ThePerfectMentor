const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
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
});

module.exports = model("Post", PostSchema);
