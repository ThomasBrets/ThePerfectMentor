const PostService = require("../services/posts");

class PostController {
  static async addPost(req, res) {
    const { error, data } = await PostService.addPost(req.body);
    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(201).json(data);
  }

  static async deletePost(req, res) {
    const { error, data } = await PostService.deletePost(req.params.userId);

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }
}

module.exports = PostController;
