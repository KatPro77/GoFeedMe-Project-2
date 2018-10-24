var path = require("path");

module.exports = function(app) {
  // Load login page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });
  // Load index page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });
  // Load volunteer page
  app.get("/volunteer", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/volunteer.html"));
  });
  // Load mealRequest page
  app.get("/meals", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/mealRequest.html"));
  });
};
