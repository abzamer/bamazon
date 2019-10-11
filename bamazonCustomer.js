//dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
require("dotenv").config();
var chalk = require("chalk");

// create the connection information for the SQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //function will run once connectio is made. user will see inventory
    displayInventory();
})

//the function will display item ID, product, and cost per unit
//this also calls the buySomething();
function displayInventory() {
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        // console.log(res);
        for (i = 0; i < res.length; i++) {
            console.log(
                res[i].item_id,
                res[i].product_name,
                "$" + res[i].price);
        }
        buySomething();
    })
};

//function which ask user ID of product & how many units 
function buySomething() {
    inquirer
        .prompt([
            {
                name: "product",
                type: "input",
                message: "Please enter the ID of the item you would like to purchase."
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?"
            }
        ]).then(function (answer) {
            var query = "SELECT * FROM products WHERE item_id = ?";
            //this makes the query to database to match the product user selected, using item ID
            connection.query(query, [answer.product], function (err, res) {
                if (err) throw err;
                //for loop is used to UPDATE database if enough quantity exists
                for (i = 0; i < res.length; i++) {
                    if (res[i].stock_quantity >= parseInt(answer.quantity)) {
                        var query = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
                        var stock = res[i].stock_quantity - answer.quantity;
                        var cost = res[i].price * answer.quantity;
                        connection.query(query, [stock, answer.product], function (err) {
                            if (err) throw err;
                            console.log("Your total cost today is: $" + cost);
                        })
                    } else {
                        console.log("Our apologies. We do not have enough to fulfill your request. Try choosing another item.");
                    }
                } connection.end();
            })
        })
}




