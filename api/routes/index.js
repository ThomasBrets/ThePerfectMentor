const express = require('express');
const auth = require("./auth")
const router = express.Router();

const checkAuth = require("../middleware/auth")

router.use("/auth", auth);

module.exports = router