const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_EMAIL_PW,
  },
});

transporter.verify().then( () => {
    console.log("Nodemailer se configuro correctamente")
})

module.exports = transporter