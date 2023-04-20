const Match = require("../models/Matchs");
const transporter = require("../config/nodemailer")


class MatchService {
  static async addMatch({ hourClass, dateClass }) {
    try {
      const match = new Match({
        hourClass,
        dateClass,
      });
      
      const resp = await match.save();
      
      await transporter.sendMail({
        from: "Tienes una nueva clase programada <isaacemanzo51@gmail.com>",
        to: "martina.duran@hotmail.com",
        subjet: "Clase creada",
        html: "<b>TE AMO MUCHO, QUIERO COMER FOCACCIA.</b>",
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
}

module.exports = MatchService;
