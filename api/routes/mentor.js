const express = require('express');
const router = express.Router()
const UserController = require('../controller/users')

//! Post
router.post("/:userId", UserController.addPost)
router.delete("/:postId", UserController.deletePost)
router.put("/:postId", UserController.updatePost)

//! Search 
router.get("/search", UserController.getAllPosts)


module.exports = router