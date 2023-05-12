const User = require("../models/Users");
const joi = require("../config/joi");

class AuthService {
  static async createUser({ name, lastName, email, password, mentor }) {

    try {
      const { error, value } = joi.validate({ name, password, email });

      if (!error) {

        const user = new User({
          name,
          email,
          password,
          mentor,
        });
        const resp = await user.save();

        return { error: false, data: resp };
      }
      return { error: true, data: error };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = AuthService;
