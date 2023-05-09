const Users = require("./models/Users");
const Post = require("./models/Posts");
const Matches = require("./models/Match");
const data = require("./seed.json");
const dotenv = require("dotenv");
dotenv.config();
const { connection } = require("./config/db");

const seedDB = async () => {
  try {
    const promisesArray = [];

    promisesArray.push(Users.deleteMany({}));
    promisesArray.push(Post.deleteMany({}));
    promisesArray.push(Matches.deleteMany({}));

    for (let i = 0; i < data.length; i++) {
      // console.log(`DATA ${data[i].name}`, data[i]);

      promisesArray.push(
        Users.create({
          name: data[i].name,
          lastName: data[i].lastName,
          email: data[i].email,
          age: data[i].age,
          password: data[i].password,
          phoneNumber: data[i].phoneNumber,
          location: data[i].location,
          photo: data[i].photo,
          admin: data[i].admin,
          mentor: data[i].mentor,
        })
      );
    }
    await Promise.all(promisesArray);
    console.log("seed complete");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

connection.once("open", () => {
  seedDB();
});
