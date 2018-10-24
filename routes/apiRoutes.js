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
};
  
// // Delete a volunteer by id
//   app.delete("/api/volunteer/:id", function(req, res) {
//     db.Volunteer.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbVolunteer) {
//       res.json(dbVolunteer);
//     });
  