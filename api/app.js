const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const morgan = require('morgan');
const db = require("./config/db");

const routes = require('./routes');

//! .env
require('dotenv').config();

const corsOptions = {
  origin: 'http://127.0.0.1:5173',
  credentials: true
};

//! Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
const sessionKey = process.env.SESSION_KEY;
app.use(session({ secret: sessionKey, resave: true, saveUninitialized: true }));
app.use(cookieParser());

//! Routes
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("funciona");
});

app.get('/cookie',function(req, res){
  res.cookie(cookie_name , 'cookie_value').send('Cookie is set');
});

app.get('/', function(req, res) {
  console.log("Cookies :  ", req.cookies);
});

//! Server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server on ${port}`);
});