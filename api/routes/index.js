const express = require('express');
const router = express.Router();

const {validateUser, checkAuthAdmin} = require("../middleware/auth")

const auth = require("./auth")
const users = require("./users")
const admin = require("./admin")
<<<<<<< HEAD
const mentor = require("./mentor")
=======
const post = require("./posts")
const match = require("./match")
>>>>>>> c7d8a31b5fc51910614cb162824da3507be46f1c

router.use("/auth", auth);
router.use("/users", validateUser, users);
router.use("/admin", checkAuthAdmin, admin)
<<<<<<< HEAD
router.use("/mentor", mentor)
=======
router.use("/posts", post)
router.use("/match", match)
>>>>>>> c7d8a31b5fc51910614cb162824da3507be46f1c

module.exports = router