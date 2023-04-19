const Match = require("../models/Matchs");

class MatchService {
  static async addMatch({ hourClass, dateClass }) {
    try {
      console.log("HOUR", hourClass);
      const match = new Match({
        hourClass,
        dateClass,
      });
      
      const resp = await match.save();

      return { error: false, data: resp };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async deleteMatch(id) {
    try {
      Match.findByIdAndDelete({ _id: id });

      const match = "Tu match se borro correctamente";

      return { error: false, data: match };
    } catch (error) {
      return { error: false, data: error.message };
    }
  }

  static async updateMatch(id, body) {
    try {
      const match = await Match.findByIdAndUpdate(
        id,
        {
          $set: {
            hourClass: body.hourClass,
            dateClass: body.dateClass,
          },
        },
        { new: true }
      );
      return { error: false, data: match };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = MatchService;
