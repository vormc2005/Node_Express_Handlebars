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
  app.get("/api/burgers", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.burgers.findAll({}).then(function(dbBurger) {
      // We have access to the buregers in the table as an argument inside of the callback function
      
      res.json(dbBurger);
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

//   // DELETE route for deleting burgers. We can get the id of the phrase we want to delete from
//   // req.params.id//Tere is no function of deleting in this application at this point //
//   app.delete("/:id", function(req, res) {});

//   // PUT route for updating flights. We can get the updated phrase from req.body
//   app.put("/", function(req, res) {});
};
