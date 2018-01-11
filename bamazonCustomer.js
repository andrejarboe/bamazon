var mysql = require("mysql");
var inquirer = require("inquirer");

//create connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "admin",
  database: "top_songsDB"
});

//connect to mysql
