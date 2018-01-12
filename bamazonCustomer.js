var mysql = require("mysql");
var inquirer = require("inquirer");

require("console.table"); //makes tables look nice in console

//create connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Aj93aaps*",
  database: "bamazon_db"
});

//connect to mysql
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

//function to propmpt user
function start() {
  connection.query("SELECT * FROM bamazon_db.products;", function(err, result) {
    if (err) throw err;
    //onece you have items show them in the console
    console.table(result);

    inquirer
      .prompt([
        {
          name: "id",
          type: "input",
          message: "Enter the ID of the item you want to buy."
        }
      ])
      .then(function(answer) {
        if (err) throw err;
        var product = result[answer.id - 1].product_name;
        var id = answer.id;
        howManyUnits(product, id);
      });
  });
}

function howManyUnits(product, id) {
  //global vars
  var quantity;
  var price;
  var item = id;  

  connection.query(
    "SELECT stock_quantity, price FROM bamazon_db.products WHERE ?",
    {
      id: id
    },
    function(err, result) {
      if (err) throw err;

      quantity = result[0].stock_quantity;
      price = result[0].price;

      inquirer
        .prompt([
          {
            name: "units",
            type: "input",
            message: "How many units of " + product + " would you like to buy?"
          }
        ])
        .then(function(answer) {
          var units = answer.units;

          if (units > quantity) {
            console.log("Insufficient quantity!");
            start();
          } else {
            //order item

            orderItems(item, units, price, quantity);
          }
        });
    }
  );
}

function orderItems(item, units, price, quantity) {
  var total = quantity - units;
  var cost = units * price;

  console.log("-----------");
  console.log("Your cost is: $" + cost +"\n");
  console.log("-----------");
  

  connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: total,

      },
      {
        id: item
      }
    ], function (err) {
      if (err) throw err;
      start()
    }
  );
}

// function totalCost() {

// };
