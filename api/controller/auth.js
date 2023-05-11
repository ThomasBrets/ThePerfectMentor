const User = require("../models/Users");
const AuthService = require("../services/auth");
const { generateToken, validateToken } = require("../config/tokens");

class AuthController {
  static async createUser(req, res) {
    const { error, data } = await AuthService.createUser(req.body);
    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.status(201).json(data);
  }
  static async loginUser(req, res) {
    const { email, password } = req.body;
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ error: "Credenciales inválidas" });
        }
        user.validatePassword(password).then((isValid) => {
          if (!isValid) {
            return res.status(401).json({ error: "Credenciales inválidas" });
          }
  
          const payload = {
            email: user.email,
            name: user.name,
          };
  
          const token = generateToken(payload);
  
          res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
          });
  
          res.json({
            token: token,
            user: payload,
          });
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Error interno del servidor" });
      });
  }

  static async logoutUser(req, res) {
    res.clearCookie("token");

    res.sendStatus(204);
  }

  static async findMyUser(req, res) {
    !req.user ? res.sendStatus(401) : res.send(req.user);
  }

  static async secret(req, res) {
    res.send(req.user);
  }
}

module.exports = AuthController;
