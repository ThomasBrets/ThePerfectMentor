const User = require("../models/Users");

const register = (req, res) => {
  User.create(req.body)
    .then((user) => {
      const payload = user;
      console.log("PAYOLAD", payload);
      res.status(201).send(payload);
    })
    .catch();
};

const findAllUsers = (req, res, next) => {
  const collection = req.app.locals.users;
  console.log("COLLECTION", collection)
  collection.find({}).toArray((err, docs) => {
    if (err) {
      res.status(500).send('Error al obtener los documentos');
    } else {
      res.send(docs);
    }
  });
};

module.exports = { register, findAllUsers };
