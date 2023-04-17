const { Schema, model } = require("mongoose");

const MatchSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  dateClass: {
    type: Number,
    required: true,
  },
  tecnologie: {
    type: String,
    required: true,
  },
});

module.exports = model("Match", MatchSchema);
