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
  static async getAllPosts(req, res) {
    const { error, data } = await UserService.getAllPosts();

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }
  static async addPost(req, res) {
    const { error, data } = await UserService.addPost(
      req.body,
      req.params.userId
    );
    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(201).json(data);
  }
  static async deletePost(req, res) {
    const { error, data } = await UserService.deletePost(req.params.postId);

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }
  static async updatePost(req, res) {
    const { error, data } = await UserService.updatePost(
      req.params.postId,
      req.body
    );

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }
}

module.exports = UserController;
