const express = require('express');
const router = express.Router();
const PostController = require("../controller/posts")


router.post("/post", PostController.addPost)
router.delete("/:postId", PostController.deletePost)

module.exports = router