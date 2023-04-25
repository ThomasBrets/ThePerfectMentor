const UserService = require("../services/users");

class UserController {
  static async updateUser(req, res) {
    const { error, data } = await UserService.updateUser(
      req.params.userId,
      req.body
    );

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }
  static async getAllMentors(req, res) {
    const { error, data } = await UserService.getAllMentors();

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }
  static async getMentorByName(req, res) {
    const { error, data } = await UserService.getMentorByName(req.params.name);

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }
}

module.exports = UserController;
