const dotenv = require("dotenv");
dotenv.config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET

const generateToken = (payload) => {
    return jwt.sign({ user: payload }, SECRET, {expiresIn: "2h"})
}

const validateToken = (token) => {
    return jwt.verify(token, SECRET)
}


module.exports = {generateToken, validateToken}