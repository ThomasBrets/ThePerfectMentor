const express = require('express');
const router = express.Router();
const PostController = require("../controller/posts")

//! Post
router.post("/:userId", PostController.addPost)
router.delete("/:postId", PostController.deletePost)
router.put("/:postId", PostController.updatePost)

//! Search 
router.get("/search", PostController.getAllPosts)

module.exports = router