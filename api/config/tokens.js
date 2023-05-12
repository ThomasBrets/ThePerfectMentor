const jwt = require('jsonwebtoken');

const SECRET = "secreto"

const generateToken = (payload) => {
    return jwt.sign({ user: payload }, SECRET, {expiresIn: "2h"})
}

const validateToken = (token) => {
    return jwt.verify(token, SECRET)
}


module.exports = {generateToken, validateToken}