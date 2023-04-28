const express = require('express');
const router = express.Router();
const MatchController = require("../controller/match")

//! Matches
router.post("/", MatchController.addMatch)
router.delete("/:matchId", MatchController.deleteMatch)
router.put("/:matchId", MatchController.updateMatch)

//!Search
router.get("/Search", MatchController.getAllMatches)

module.exports = router