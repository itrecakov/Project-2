// 🌎 HTML ROUTES

var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.DataNames.findAll({}).then(function(dbExamples) {
      console.log(dbExamples);
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  //Pusher service will trigger the event of voting or corc(corelation or causation)
  // pusher.trigger('voting', 'corc', {
  //   "points": 1,
  //   "vote": req.body.vote
  // });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
