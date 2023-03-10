const express = require('express');
const router = express.Router();

const AuthController = require("../controller/authController")

//! POST
router.post("/register", AuthController.createUser)

//! GET
//router.get("/find_users", findAllUsers)

module.exports = router