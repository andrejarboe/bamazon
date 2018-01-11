var mysql = require("mysql");
var inquirer = require("inquirer");


require('console.table'); //makes tables look nice in console

//create connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "admin",
  database: "bamazon_db"
});

//connect to mysql
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

//function to propmpt user
function start() {
  connection.query(
    "SELECT * FROM bamazon_db.products;", function (err, result) {
      if (err) throw err;
      //onece you have items show them in the console
      console.table(result);

      inquirer.prompt([
        {
          name: "id",
          type: "input",
          message: "Enter the ID of the item you want to buy."
        }
      ]).then(function (answer) {
        //loop over ids
        console.log("answer: " + answer.id);
        console.log(result[0].id);
        
        for (var i = 0; i < result.length; i++) {
          if (answer.id == result[i].id) {
            console.log("id: " + answer.id);
          } 
        }
      });
    }
  );
}


