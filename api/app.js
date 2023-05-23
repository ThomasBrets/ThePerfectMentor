const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const db = require("./config/db");

const routes = require('./routes');

const app = express();

// Configuración de variables de entorno
require('dotenv').config();

// Configuración de opciones CORS
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

// Middlewares
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const sessionKey = process.env.SESSION_KEY;
app.use(session({ secret: sessionKey, resave: true, saveUninitialized: true, cookie: {
  sameSite: 'none',
  secure: true
} }));


// Rutas
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

// Servidor
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
