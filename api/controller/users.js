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
}

module.exports = UserController;
