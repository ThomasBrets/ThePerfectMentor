const User = require("../models/Users");
const joi = require("../config/joi");
const bcrypt = require("bcrypt");

class UserService {
  static async updateUser(id, body) {
    try {
      const { error, value } = joi.validate({
        password: body.password,
        name: body.name,
      });
      if (!error) {
        const user = await User.findByIdAndUpdate(
          id,
          {
            $set: {
              name: body.name,
              email: body.email,
              password: body.password && bcrypt.hashSync(body.password, 10),
              mentor: body.mentor,
            },
          },
          { new: true }
        );
        return { error: false, data: user };
      }
      return { error: true, data: error };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async getAllMentors() {
    try {
      const mentors = await User.find({ mentor: true });
      // console.log("MENTORS", mentors);

      return { error: false, data: mentors };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async getMentorByName(name) {
    try {
      const mentors = await User.find({
        mentor: true,
        name: { $regex: name, $options: "i" },
      });
      console.log("MENTORS", mentors);

      return { error: false, data: mentors };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = UserService;
