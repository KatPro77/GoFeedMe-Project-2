var db = require("../models");

module.exports = function(app) {
  // Get all volunteers
  // app.get("/api/models/volunteer", function(req, res) {
  //   db.Volunteer.findAll({}).then(function dbvolunteer() {
  //     res.json(dbvolunteer);
  //   });
  // });

  // Create a new volunteer
  app.post("/api/volunteer", function(req, res) {
    console.log(req.body);
    db.Volunteer.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      location: req.body.location,
      availability: req.body.availability,
      mealPreference: req.body.preference,
      mealQuantity: req.body.mealQuantity,
      background: req.body.background
    }).then(function(dbVolunteer) {
      res.json(dbVolunteer);
    });
  });

  // // Delete a volunteer by id
  // app.delete("/api/models/volunteer.js/:id", function (req, res) {
  //   db.volunteer.destroy({ where: { id: req.params.id } }).then(function (dbvolunteer) {
  //     res.json(dbvolunteer);
  //   });
  // });
};
