const express = require('express');
const Users = require("../models/Users")
const router = express.Router();

const validateUser = require("../middleware/auth")

const auth = require("./auth")
const users = require("./users")

router.use("/auth", auth);
router.use("/users", users);


module.exports = router