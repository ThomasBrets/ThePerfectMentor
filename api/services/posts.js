const Post = require("../models/Posts");

class PostService {
  static async addPost({ tecnologies, price, description }) {
    try {
      console.log("data", tecnologies);
      const post = new Post({
        tecnologies,
        price,
        description,
      });
      console.log("POST", post);
      const resp = await post.save();

      return { error: false, data: resp };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = PostService;
