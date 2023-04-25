const express = require('express');
const router = express.Router();
const PostController = require("../controller/posts")

//! Post
router.get("/", PostController.getAllPosts)
router.post("/post", PostController.addPost)
router.delete("/:postId", PostController.deletePost)
router.put("/:postId", PostController.updatePost)


module.exports = router