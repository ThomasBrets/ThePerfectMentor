const { validateToken } = require("../config/tokens");

const validateUser = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return res.sendStatus(401);
  }

  const { user } = validateToken(token);

  if (!user) {
    return res.sendStatus(401);
  }

  req.user = user;
  next();
};

const checkAuthAdmin = (req, res, next) =>
  req.isAuthenticated() && req.user[0].admin
    ? next()
    : res.status(401).send("unauthorized");

const checkAuthMentor = (req, res, next) =>
  req.isAuthenticated() && req.user[0].mentor
    ? next()
    : res.status(401).send("unauthorized");

module.exports = { validateUser, checkAuthAdmin, checkAuthMentor };
