//! Dependencies
const dotenv = require("dotenv")
dotenv.config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const volleyball = require('volleyball')

const routes = require('./routes')

//!Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(volleyball) 


const sessionKey = process.env.SESSION_KEY

app.use(session({secret: sessionKey, resave: true, saveUninitialized: true}))
// console.log("KEY", sessionKey);


//!Routes
app.use("/api", routes)

app.get("/", (req, res) => {
    res.send("funciona")    
})

//!Server
const port = process.env.PORT || 3000
// console.log("PORT", port);

app.listen(port, () => {
    console.log(`Server on ${port}`);
})


