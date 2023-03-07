const express = require('express');
const router = express.Router();

const { register, findAllUsers } = require("../controller/authController")

//! POST
router.post("/register", register)

//! GET
router.get("/find_users", findAllUsers)

module.exports = router