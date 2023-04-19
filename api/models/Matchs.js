const { Schema, model } = require("mongoose");

const MatchSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  post: { type: Schema.Types.ObjectId, ref: "Post" },
  hourClass: {
    type: Number,
    required: true,
  },
  dateClass: {
    type: Number,
    required: true,
  },
});

module.exports = model("Match", MatchSchema);
