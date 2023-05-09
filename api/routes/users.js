const express = require('express');
const router = express.Router()
const UserController = require('../controller/users')
const {checkAuthMentor} = require("../middleware/auth")

const mentor = require("./mentor")


//! USER
router.put("/:userId", UserController.updateUser)

//! SEARCH
router.get("/search", UserController.getAllMentors)
router.get("/search/:name", UserController.getMentorByName)

//!Mentor
router.use("/mentor", checkAuthMentor, mentor)

module.exports = router