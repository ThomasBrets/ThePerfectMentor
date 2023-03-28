const express = require('express');
const router = express.Router()
const UserController = require('../controller/users')


//! USER
router.put("/:userId", UserController.updateUser)

module.exports = router