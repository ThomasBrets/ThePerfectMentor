const express = require('express');
const router = express.Router()
const UserController = require('../controller/users')


//! USER
router.put("/:userId", UserController.updateUser)

//! SEARCH
router.get("/search", UserController.getAllMentors)
router.get("/search/:name", UserController.getMentorByName)

//!Post
router

module.exports = router