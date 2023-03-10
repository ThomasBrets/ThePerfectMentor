const express = require("express");
const User = require("../models/Users");
const mongoose = require("mongoose");

class AuthController {
  static async createUser(req, res) {
    const newUser = new User(req.body);
    newUser._id = mongoose.Types.ObjectId();
    newUser.save(function (err) {
      if (err) {
        console.log("No se guardo");
        res.status(400);
        res.send();
      }
    });
    return res.status(201).json(data);
  }
}
































/*
const User = require("../models/Users");
const AuthService = require("../services/authServices")

class AuthController {
  static async createUser(req, res) {
    const { error, data } = await AuthService.createUser(req.body);
console.log("DATA", data)
console.log("ERROR", error)
    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(201).json(data);
  }
}

const register = (req, res) => {
  User.create(req.body)
    .then((user) => {
      const payload = user;
      console.log("PAYOLAD", payload);
      res.status(201).send(payload);
    })
    .catch();
};

/*
const findAllUsers = (req, res) => {
  User.find()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
};
*/

module.exports = AuthController;
