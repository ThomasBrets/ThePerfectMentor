const User = require("../models/Users");

class AuthService {
  static async createUser({
    name,
    lastName,
    email,
    age,
    password,
    areaCode,
    phoneNumber,
    country,
    photo,
  }) {
    try {
      const { error, value } = true
      if (!error) {
        const user = new User({
          name,
          lastName,
          email,
          age,
          password,
          areaCode,
          phoneNumber,
          country,
          photo,
        });
        console.log("USER", user)
        const resp = await user.save;

        return { error: false, data: resp };
      }
      return { error: true, data: error };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = AuthService;
