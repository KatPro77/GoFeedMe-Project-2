var mysql = require("mysql");
var inquirer = require("inquire");

var connection = mysql.createConnection({
    host: "localhost",
    port: 9498,

    user: "root",

    password: "",
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
            var query = "SELECT name, FROM name WHERE ?";
            connection.query(query, {})
        })
}