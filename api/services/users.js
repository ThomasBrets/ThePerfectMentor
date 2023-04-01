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
              admin: body.admin,
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
}

module.exports = UserService;
