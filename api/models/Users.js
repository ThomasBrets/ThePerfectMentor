const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const findOrCreate = require("mongoose-findorcreate");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
  location: [
    {
      country: { type: String },
      city: { type: String },
    },
  ],
  photo: {
    type: String,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  mentor: {
    type: Boolean,
    required: true,
    default: false,
  },
  salt: {
    type: String,
  },
  post: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    },
  ],
});

UserSchema.methods.hash = (password, salt) => {
  return bcrypt.hash(password, salt);
};

UserSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.pre("save", async function (next) {
  if (this.password) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }
  next();
});

UserSchema.plugin(findOrCreate);

module.exports = model("User", UserSchema);
