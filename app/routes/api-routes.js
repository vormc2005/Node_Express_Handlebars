// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our languages model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the Phrases
  app.get("/burgers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.burgers.findAll({
      
    }).then(function(dbBurger) {
      // We have access to the buregers in the table as an argument inside of the callback function
      console.log(dbBurger)
      res.render("index", {burgers:dbBurger});
    });
  });

  // POST route for saving a new country's phrases
  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.burgers.create({
     burger_name: req.body.burger_name,
      devoured: req.body.devoured,
      
    }).then(function(dbBurger) {
      // We have access to the new burger as an argument inside of the callback function
      res.json(dbBurger);
    });
  });

 /**update route, we may need it to switch to devour true */

 app.put("/api/burgers", function (req,res){
console.log(req);
  db.burger.update({
    burger_name:req.body.burger_name,
    devoured: !req.body.devoured
  },
  {
    where: {
      id: req.body.id
    }
  }).then(function(dbBurger){
    res.json(dbBurger)
  })
  .catch(function(err){
    res.json(err);
  })
})


};
