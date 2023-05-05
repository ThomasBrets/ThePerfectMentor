const { default: mongoose } = require("mongoose");
const Post = require("../models/Posts");
const User = require("../models/Users");
class PostService {
  static async getAllPosts() {
    try {
      const post = await Post.find({}).populate("user", "name email")
      console.log("POST", post);

      return { error: false, data: post}
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async addPost({tecnologies, price, description}, id) {
    try {
      const user = await User.findById(id);
      console.log("USER", user);

      const post = await new Post({
        tecnologies,
        price,
        description,
        author: user
      });
      console.log("POST", post);
      const resp = await post.save();

      return { error: false, data: resp };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async deletePost(id) {
    try {
      await Post.findByIdAndDelete({ _id: id });
      const correcto = "Tu publicacion se borro correctamente";

      return { error: false, data: correcto };
    } catch (error) {
      return { error: false, data: error.message };
    }
  }

  static async updatePost(id, body) {
    try {
      const post = await Post.findByIdAndUpdate(
        id,
        {
          $set: {
            tecnologies: body.tecnologies,
            price: body.price,
            description: body.description,
          },
        },
        { new: true }
      );
      return { error: false, data: post };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = PostService;
