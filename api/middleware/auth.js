const { validateToken } = require("../config/tokens");

const validateUser = (req, res, next) => {
  const token = req.cookies.token;
  console.log("VToken", token);
  if(!token) res.sendStatus(401);

  const { user } = validateToken(token);
  console.log("VUser", user);
  if(!user) res.sendStatus(401);

  req.user = user;

  next();
};

const checkAuthAdmin = (req, res, next) => {
  req.isAuthenticated() && req.user[0].admin
    ? next()
    : res.status(401).send("unauthorized");
};

const checkAuthMentor = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) res.sendStatus(401);

  const { user } = validateToken(token);
  if (!user && !user.mentor) res.sendStatus(401);

  req.user = user;

  next();
};

module.exports = { validateUser, checkAuthAdmin, checkAuthMentor };
