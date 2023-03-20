const express = require("express");
const User = require("../models/Users");
const mongoose = require("mongoose");
const AuthService = require("../services/authServices");

class AuthController {
  static async createUser(req, res) {
    const { error, data } = await AuthService.createUser(req.body);
console.log("DATA", data)
    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(201).json(data);
  }
}


module.exports = AuthController;
