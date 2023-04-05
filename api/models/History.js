const { Schema, model } = require("mongoose");

const HistorySchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    date: {
      type: Date,
      default: Date.now,
    },
    complete: {
      type: Boolean,
      default: false,
    },
  });
  
  module.exports = model("History", HistorySchema);