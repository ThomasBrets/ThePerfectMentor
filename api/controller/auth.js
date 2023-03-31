const express = require("express");
const User = require("../models/Users");
const mongoose = require("mongoose");
const AuthService = require("../services/auth");
const { generateToken, validateToken } = require("../config/tokens");
// const {validatePassword} = require("../models/Users")

class AuthController {
  static async createUser(req, res) {
    const { error, data } = await AuthService.createUser(req.body);
    // console.log("DATA", data);
    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(201).json(data);
  }
  static async loginUser(req, res) {
    const { email, password } = req.body;
    console.log("EMAIL", email);
    console.log("PASSWORD", password);

      User.findOne({ email })
      .then((user) => {
        console.log("USER", user);
        if (!user) return res.sendStatus(401);
        user.validatePassword(password).then((isValid) => {
          if (!isValid) return res.sendStatus(401);

          const payload = {
            email: user.email,
            name: user.name,
          };

          const token = generateToken(payload);

          res.cookie("token", token);

          res.send(payload);
        });
      }).catch((error) => console.log(error))
      
  }
 
}

module.exports = AuthController;
