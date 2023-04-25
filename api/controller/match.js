const MatchService = require("../services/match");

class MatchController {
  static async addMatch(req, res) {
    const { error, data } = await MatchService.addMatch(req.body);
    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(201).json(data);
  }

  static async deleteMatch(req, res) {
    const { error, data } = await MatchService.deleteMatch(req.params.matchId);

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }

  static async updateMatch(req, res) {
    const { error, data } = await MatchService.updateMatch(
      req.params.matchId,
      req.body
    );

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }

  static async getAllMatches(req, res) {
    const { error, data } = await MatchService.getAllMatches();

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }
}

module.exports = MatchController;
