const User = require("../models/Users");
const Post = require("../models/Posts");
const joi = require("../config/joi");
const bcrypt = require("bcrypt");

class UserService {
  static async updateUser(id, body) {
    try {
      const { error, value } = joi.validate({
        password: body.password,
        name: body.name,
      });
      if (!error) {
        const user = await User.findByIdAndUpdate(
          id,
          {
            $set: {
              name: body.name,
              email: body.email,
              password: body.password && bcrypt.hashSync(body.password, 10),
              mentor: body.mentor,
            },
          },
          { new: true }
        );
        return { error: false, data: user };
      }
      return { error: true, data: error };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async getAllMentors() {
    try {
      const mentors = await User.find({ mentor: true }).populate("post._id");

      return { error: false, data: mentors };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async getMentorByName(name) {
    try {
      const mentors = await User.find({
        mentor: true,
        name: { $regex: name, $options: "i" },
      });

      return { error: false, data: mentors };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async getAllPosts() {
    try {
      const post = await Post.find({}).populate("user", "name email")
      console.log("POST", post);

      return { error: false, data: post}
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
  static async addPost({ tecnologies, price, description, category }, id) {
    try {
      const user = await User.findById(id);
      console.log("USER", user);

      const post = await new Post({
        tecnologies,
        price,
        description,
        category,
        author: user,
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

module.exports = UserService;
