const express = require('express');
const router = express.Router()
const UserController = require('../controller/users')
const {checkAuthMentor} = require("../middleware/auth")

const mentor = require("./mentor")


//! USER
router.put("/:userId", UserController.updateUser)

//! SEARCH
//?Mentor
router.get("/search", UserController.getAllMentors)
router.get("/search/:name", UserController.getMentorByName)
//?Post
router.get("/search/post", UserController.getAllPosts)
router.get("/search/tecnologies/:name", UserController.getPostByTecnologies)
router.get("/search/category/:name", UserController.getPostByCategory)



//!MENTOR
router.use("/mentor", checkAuthMentor, mentor)

module.exports = router