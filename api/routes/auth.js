const express = require('express');
const router = express.Router();
const AuthController = require("../controller/auth")
const {validateUser} = require("../middleware/auth")

//! POST
router.post("/register", AuthController.createUser)
router.post("/login", AuthController.loginUser)
router.post("/logout", AuthController.logoutUser);

//! GET
router.get("/me", AuthController.findMyUser);
router.get("/secret", AuthController.secret)

module.exports = router