const Match = require("../models/Match");
const transporter = require("../config/nodemailer")

class MatchService {
  static async addMatch({ dateClass }) {
    try {
      const match = new Match({
        dateClass,
      });
      
      const resp = await match.save();
      
      await transporter.sendMail({
        from: "Tienes una nueva clase programada <isaacemanzo51@gmail.com>",
        to: "thomas15501331@gmail.com",
        subjet: "Clase creada",
        html: "<b>Bhavi sos malisimo.</b>",
      })
      

      return { error: false, data: resp };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async deleteMatch(id) {
    try {
      await Match.findByIdAndDelete({ _id: id });
      const correcto = "Tu clase se borro correctamente";

      return { error: false, data: correcto };
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
  static async getAllMatches() {
    try {
      const matches = await Match.find({}).populate("user post._id")

      return { error: false, data: matches}
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = MatchService;
