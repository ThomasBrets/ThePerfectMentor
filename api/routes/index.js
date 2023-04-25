const express = require('express');
const router = express.Router();

const {validateUser, checkAuthAdmin} = require("../middleware/auth")

const auth = require("./auth")
const users = require("./users")
const admin = require("./admin")
const mentor = require("./mentor")
const match = require("./match")

router.use("/auth", auth);
router.use("/users", users);
router.use("/admin", checkAuthAdmin, admin)
router.use("/mentor", mentor)
router.use("/match", match)

module.exports = router