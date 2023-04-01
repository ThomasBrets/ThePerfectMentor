const express = require('express');
const router = express.Router();
const AdminController = require('../controller/admin')

//USER
router.delete("/:userId", AdminController.deleteUsers)

module.exports = router