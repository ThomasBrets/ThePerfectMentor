const express = require('express');
const Users = require("../models/Users")
const router = express.Router();

const {validateUser, checkAuthAdmin} = require("../middleware/auth")

const auth = require("./auth")
const users = require("./users")
const admin = require("./admin")

router.use("/auth", auth);
router.use("/users", validateUser, users);
router.use("/admin", checkAuthAdmin, admin)


module.exports = router