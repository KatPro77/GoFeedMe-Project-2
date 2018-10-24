var db = require("../models");

module.exports = function(app) {
  //Get all volunteers
  app.get("/api/volunteer", function(req, res) {
    db.Volunteer.findAll({}).then(function(dbVolunteer) {
      res.json(dbVolunteer);
    });
  });

  // Create a new volunteer
  app.post("/api/volunteer", function(req, res) {
    console.log(req.body);
    db.Volunteer.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    }).then(function(dbVolunteer) {
      res.json(dbVolunteer);
    });
  });

  //create new request for food.
  app.post("/api/requests", function(req, res) {
    console.log(req.body);
    db.requests.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
      })
      .then(function(dbrequests) {
        res.json(dbrequests);
      });
  });
};
