const AdminService = require("../services/admin");

class AdminController {
  static async getUsers(req, res) {
    const { error, data } = await AdminService.getUsers(req.params.id);

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }

  static async deleteUsers(req, res) {
    const { error, data } = await AdminService.deleteUsers(req.params.userId);

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }

  static async propoteAdmin(req, res) {
    const { error, data } = await AdminService.promoteAdmin(
      req.params.userId,
      req.body.admin
    );

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }
}

module.exports = AdminController;
