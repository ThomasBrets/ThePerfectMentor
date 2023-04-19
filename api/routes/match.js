const express = require('express');
const router = express.Router();
const MatchController = require("../controller/match")

router.post("/matchs", MatchController.addMatch)
router.delete("/:matchId", MatchController.deleteMatch)
router.put("/:matchId", MatchController.updateMatch)

module.exports = router