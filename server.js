// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
const db = require("./app/models");
const exphbs = require("express-handlebars");
const sequelize = require("sequelize");
const path = require("path")
// const path = require("path")
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8060;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// let viewsPath = path.join(__dirname, "/app", "/views")
// app.set('views', viewsPath);


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
  });
});