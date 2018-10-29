var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 9498,
    user: "root",
    password: "root",
    database: "volunteer_db"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "How would you like to search?",
            choices: [
                "Find market by name",
                "Find market by city",
                "Find market by state",
                "Find market by zipcode"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Find market by name":
                    nameSearch();
                    break;
                case "Find market by city":
                    citySearch();
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
            message: "What is the name of the farmers market you are searching for?"
        })
        .then(function (answer) {
            var query = "SELECT * FROM farmersmarket WHERE ?";
            connection.query(query, { Name: answer.market }, function (err, res) {
                console.log(res)
                // console.log(answer);
                for (var i = 0; i < res.length; i++) {
                    name = (res[i].Name);
                    console.log(res[i]);
                }
                runSearch();
            });
        });
}

function citySearch() {
    inquirer
        .prompt({
            name: "market",
            type: "input",
            message: "What is the city in which your farmers market is located?"
        })
        .then(function (answer) {
            console.log(answer.City);
            connection.query("SELECT * FROM farmersmarket WHERE ?", { City: answer.market }, function (err, res) {
                console.log(res);
                for (var i = 0; i < res.length; i++) {
                    city = (res[i].City);
                    console.log(res[i]);
                }
                runSearch();
            });
        });
}

function stateSearch() {
    inquirer
        .prompt({
            name: "market",
            type: "input",
            message: "What is the state in which your farmers market is located?"
        })
        .then(function (answer) {
            var query = "SELECT * FROM farmersmarket WHERE ?";
            connection.query(query, { State: answer.market }, function (err, res) {
                console.log(res)
                // console.log(answer);
                for (var i = 0; i < res.length; i++) {
                    state = (res[i].State);
                    console.log(res[i]);
                }
                runSearch();
            });
        });
}

  function zipcodeSearch() {
    inquirer
        .prompt({
            name: "market",
            type: "input",
            message: "What is the zip code of the farmers market you are searching for?"
        })
        .then(function (answer) {
            var query = "SELECT * FROM farmersmarket WHERE ?";
            connection.query(query, { Zipcode: answer.market }, function (err, res) {
                console.log(res)
                // console.log(answer);
                for (var i = 0; i < res.length; i++) {
                    zipcode = (res[i].Zipcode);
                    console.log(res[i]);
                }
                runSearch();
            });
        });
}