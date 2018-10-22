var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 9498,
    user: "root",
    password: "root",
    database: "volunteer_db"
});

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name:"action",
            type: "rawlist",
            message: "How would you like to search?",
            choices: [
                "Find market by name",
                "Find market by street",
                "Find market by city",
                "Find market by county",
                "Find market by state",
                "Find market by zipcode"
            ]
        })
        .then(function(answer) {
            switch (answer.action) {
                case "Find market by name":
                    nameSearch();
                    break;
                case "Find market by street":
                    streetSearch();
                    break;
                case "Find market by city":
                    citySearch();
                    break;
                case "Find market by county":
                    countySearch();
                    break;
                case "Find market by state":
                    stateSearch();
                    break;
                case "Find market by zipcode":
                    zipcodeSearch();
                    break;
            }
        });
}

function nameSearch() {
    inquirer
        .prompt({
            name: "market",
            type: "input",
            message: "What is the name of the farmers market you searching for?"
        })
        .then(function(answer) {
            var query = "SELECT * FROM volunteer_db WHERE name = ?";
            console.log(answer.market);
            connection.query(query, answer.market, function(err, res) {
                for (var i = 0; i<length; i++) {
                    console.log("Position" + res[i].position + " || Name: " + res[i].name);
                }
                runSearch();
            });
        });
}

function streetSearch() {
    inquirer
        .prompt({
            name: "street",
            type: "input",
            message: "What is the street name of the farmers market you searching for?"
        })
        .then(function(answer) {
            var query = "SELECT street, FROM street WHERE ?";
            connection.query(query, {street: answer.street }, function(err, res) {
                for (var i = 0; i<length; i++) {
                    console.log("Position" + res[i].position + " || Street: " + res[i].street);
                }
                runSearch();
            });
        });
}

function citySearch() {
    inquirer
        .prompt({
            name: "city",
            type: "input",
            message: "What is the name of thecity where your farmers market is located?"
        })
        .then(function(answer) {
            var query = "SELECT city, FROM city WHERE ?";
            connection.query(query, {city: answer.city }, function(err, res) {
                for (var i = 0; i<length; i++) {
                    console.log("Position" + res[i].position + " || City: " + res[i].city);
                }
                runSearch();
            });
        });
}

function countySearch() {
    inquirer
        .prompt({
            name: "county",
            type: "input",
            message: "What is the name of the county where your farmers market is located?"
        })
        .then(function(answer) {
            var query = "SELECT county, FROM county WHERE ?";
            connection.query(query, {county: answer.county }, function(err, res) {
                for (var i = 0; i<length; i++) {
                    console.log("Position" + res[i].position + " || County: " + res[i].county);
                }
                runSearch();
            });
        });
}

function stateSearch() {
    inquirer
        .prompt({
            name: "state",
            type: "input",
            message: "What is the name of the state where your farmers market is located?"
        })
        .then(function(answer) {
            var query = "SELECT state, FROM state WHERE ?";
            connection.query(query, {state: answer.state }, function(err, res) {
                for (var i = 0; i<length; i++) {
                    console.log("Position" + res[i].position + " || State: " + res[i].state);
                }
                runSearch();
            });
        });
}

function zipcodeSearch() {
    inquirer
        .prompt({
            name: "zipcode",
            type: "input",
            message: "What is the street name of the farmers market you searching for?"
        })
        .then(function(answer) {
            var query = "SELECT zipcode, FROM zipcode WHERE ?";
            connection.query(query, {zipcode: answer.zipcode }, function(err, res) {
                for (var i = 0; i<length; i++) {
                    console.log("Position" + res[i].position + " || Zipcode: " + res[i].zipcode);
                }
                runSearch();
            });
        });
}