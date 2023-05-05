const { Schema, model } = require("mongoose");

const MatchSchema = new Schema({
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  post: [
    {
      _id: { type: Schema.Types.ObjectId, ref: "Post" }
    }
],
  dateClass: {
    type: Date,
    required: true,
  },
  complete: {
    type: String,
    required: true,
    default: false,
  }
});

module.exports = model("Match", MatchSchema);
