const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dotenv = require("dotenv")
dotenv.config()


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
