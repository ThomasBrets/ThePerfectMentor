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

  static async deletePost(id) {
    try {
<<<<<<< HEAD
      Post.deleteOne({ _id: id });
=======
      await Post.findByIdAndDelete({ _id: id });
      const correcto = "Tu publicacion se borro correctamente";
>>>>>>> c7d8a31b5fc51910614cb162824da3507be46f1c

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
