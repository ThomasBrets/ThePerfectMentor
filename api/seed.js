const History = require("./models/History");
const Users = require("./models/Users");
const data = require("./seed.json");
const dotenv = require("dotenv");
dotenv.config();
const { connection } = require("./config/db")

const seedDB = async () => {
    try {
        const promisesArray = [];
        
        promisesArray.push(Users.deleteMany({}))
        promisesArray.push(History.deleteMany({}))
        for(let i = 0; i < data.length; i++) {
            // console.log(`DATA ${data[i].name}`, data[i]);
            
            promisesArray.push(Users.create({
            name: data[i].name,
            lastName: data[i].lastName,
            email: data[i].email,
            age: data[i].age,
            password: data[i].password,
            areaCode: data[i].areaCode,
            phoneNumber: data[i].phoneNumber,
            country: data[i].country,
            photo: data[i].photo,
            admin: data[i].admin,
            mentor: data[i].mentor,
                }))
        }
        await Promise.all(promisesArray)
        console.log("seed complete");
        process.exit(0)
    } catch (error) {
        console.log(error);
    }
}

connection.once("open", () => {
    seedDB();
  });