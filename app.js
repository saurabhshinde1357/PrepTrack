// dotenv config
require("dotenv").config();

// import packages
const express = require("express");
const path = require("path");
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');

// initialization of app
const app = express();
const port = process.env.PORT || 5000;

// define view engine settings
app.set("view engine", "ejs");

// serve static files
const staticPath = path.join(__dirname, "/public");
app.use(express.static(staticPath));

// body parser
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse incoming JSON data
app.use(express.json());


// Set up express-session with MongoDB as the session store
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.DATABASE,
        collectionName: 'sessions'
    }),
    cookie: { maxAge: 1800000  }  // Session expiration time
}));




// Database connection
require("./config/db_config");

// import routers
const home = require("./routes/home.router");
const auth = require("./routes/auth.router");
const formula = require("./routes/formula.router");
const options = require("./routes/option.router");
const subjects = require("./routes/subject.router");
const loader = require("./routes/loader.router");

// use routers
app.use("/",home);
app.use("/auth",auth);
app.use("/formula", formula);
app.use("/options", options);
app.use("/subjects", subjects);
app.use("/loader", loader);

// listening app
app.listen(port,()=>{
    console.info("http://127.0.0.1:"+port)
})