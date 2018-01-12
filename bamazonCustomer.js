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
        var product = result[answer.id - 1].product_name;
        var id = answer.id;
        // howManyUnits(product, id);
        connection.query(
          "SELECT * FROM bamazon_db.products WHERE ?",
          {
            id: id,

          }, 
          function (err, res) {
            if (err) throw err;
            console.log("id is: " + id);
            console.log("the res is: " + res);

            if (answer.units > res[0]) {
              console.log("Insufficient quantity!");
              start();
            } else {
              //order item
              console.log("order item, units: " + answer.units + " quanity: " + res);
              // orderItems(id, answer.units, res.stock_quantity);
            }
          });
      });
    }
  );
}

function howManyUnits(product, id) {
  inquirer.prompt([
    {
      name: "units",
      type: "input",
      message: "How many units of " + product + " would you like to buy?"
    }
  ]).then(function (answer) {

    connection.query(
      "SELECT stock_quantity FROM bamazon_db.products WHERE ?",
      {
        id: id,

      }
      , function (err, res) {
        if (err) throw err;
        console.log("id is: " + id);
        console.log("the res is: " + res);

        if (answer.units > res[0]) {
          console.log("Insufficient quantity!");
          start();
        } else {
          //order item
          console.log("order item, units: " + answer.units + " quanity: " + res);
          // orderItems(id, answer.units, res.stock_quantity);
        }
      });
  });
}

function orderItems(id, units, quanity) {
  var total = quanity - units;


  connection.query(
    "UPDATE `bamazon_db`.`products` SET ? WHERE ?",
    [
      {
        stock_quantity: total
      },
      {
        id: id
      }
    ],
    function (err) {
      if (err) throw err;
      totatCost(id, units);
    }
  );


}

function totalCost(id, units) {
  connection.query(
    "SELECT price FROM bamazon_db.products WHERE ?",
    [
      {
        id: id
      }
    ]
  ),
    function (err, res) {
      if (err) throw err;

      var cost = units * res.price;

      console.log("Your total cost is: $" + cost);
    };

}

function showTable() {
  connection.querry(
    "SELECT * FROM bamazon_db.products;", function (err, result) {
      if (err) throw err;
      //onece you have items show them in the console
      console.table(result);
    });
}


