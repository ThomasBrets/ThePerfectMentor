const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config({
  path: "C:/Users/Isac/Desktop/Work/Proyectos activos/03-ThePerfectMentor/ThePerfectMentor/api/.env",
});

const connectionString = process.env.MONGODB_URI;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect mongoDB", err);
  });

module.exports = mongoose;
