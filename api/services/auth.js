const User = require("../models/Users");
const joi = require("../config/joi");

class AuthService {
  static async createUser({
    name,
    email,
    password,
    mentor,
  }) {
    try {
      const { error, value } = joi.validate({ name, password, email });

      if (!error) {
        console.log("ENTRA");
        const user = new User({
          name,
          email,
          password,
          mentor,
        });
        console.log("USER", user);
        const resp = await user.save()

        return { error: false, data: resp };
      }
      return { error: true, data: error };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  }

module.exports = AuthService;
