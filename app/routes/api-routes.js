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
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.burgers.findAll({}).then(function(dbBurger) {
      // We have access to the buregers in the table as an argument inside of the callback function
      const devoured = [];
      const noteaten = [];

      dbBurger.forEach(item => {
        const burger = { id: item.id, burger_name: item.burger_name, devoured: item.devoured, noteaten: item.noteaten };

        if( burger.devoured ){
          devoured.push(burger);
        } else {
          noteaten.push(burger);
        }
      });

      res.render("index", {burgers: {devoured: devoured, noteaten: noteaten}});
    });
  });

  // POST route for saving a new country's phrases
  app.post("/api/burgers", function(req, res) {
    console.log("add burger");
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.burgers.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured,
      noteaten:req.body.noteaten
    }).then(function(dbBurger) {
      // We have access to the new burger as an argument inside of the callback function
      res.json(dbBurger);
    });
  });

 /**update route, we may need it to switch to devour true */

 app.put("/api/burgers/:id", function (req,res){
  db.burgers.update({
    devoured: 1,
    noteaten: 0
  },
  {
    where: {
      id: req.params.id
    }
  }).then(function(dbBurger){
    res.json({success: true})
  })
  .catch(function(err){
    res.json(err);
  })
})


};
