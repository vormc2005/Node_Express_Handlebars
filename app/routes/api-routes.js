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
    db.Phrase.findAll({
     
    }).then(function(dbBurger) {
      // We have access to the phrases in the table as an argument inside of the callback function
      console.log(dbBurger);
      res.render("index", {burgers:dbBurger});
    });
  });

  // POST route for saving a new country's phrases
  app.post("/", function(req, res) {
    console.log(req.body);
    
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Phrase.create({
      countryname: req.body.country,
      hello: req.body.hello,
      goodbye: req.body.goodbye,
      thankyou: req.body.thankyou,
      excuseme: req.body.excuseme,
      mayi: req.body.mayi,
      howmuch: req.body.howmuch,
      bathroom: req.body.bathroom,
      yesno: req.body.yesno,
      allergy: req.body.allergy,
      whereis: req.body.whereis,
      help: req.body.help,
      sorry: req.body.sorry
    })
    
    .then(function(dbPhrase) {
      // We have access to the new language as an argument inside of the callback function
      res.json(dbPhrase);
    });
  });

  // DELETE route for deleting Phrases. We can get the id of the phrase we want to delete from
  // req.params.id//Tere is no function of deleting in this application at this point //
  app.delete("/:id", function(req, res) {});

  // PUT route for updating flights. We can get the updated phrase from req.body
  app.put("/", function(req, res) {});
};
