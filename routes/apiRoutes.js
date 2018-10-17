var db = require("../models");

module.exports = function(app) {
  // Get all volunteers
  app.get("/models/example.js", function(req, res) {
    db.volunteer.findAll({}).then(function(dbvolunteer) {
      res.json(dbvolunteer);
    });
  });

  // Create a new volunteer
  app.post("/api/models/exapmle.js", function(req, res) {
    db.volunteer.create(req.body).then(function(dbvolunteer) {
      res.json(dbvolunteer);
    });
  });

  // Delete a volunteer by id
  app.delete("/api/models/example.js/:id", function(req, res) {
    db.volunteer.destroy({ where: { id: req.params.id } }).then(function(dbvolunteer) {
      res.json(dbvolunteer);
    });
  });
};
