const AdminService = require("../services/admin");

class AdminController {
    
  static async deleteUsers(req, res) {
    const { error, data } = await AdminService.deleteUsers(req.params.userId);

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }
}

module.exports = AdminController;