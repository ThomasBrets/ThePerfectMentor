const { validateToken } = require("../config/tokens");

const validateUser = (req, res, next) => {
  const token = req.cookies.token;
  if(!token) res.sendStatus(401);

  const { user } = validateToken(token);
  if(!user) res.sendStatus(401);

  req.user = user;

  next();
};

module.exports = { validateUser };
