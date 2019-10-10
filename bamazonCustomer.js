var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "bamazon_db"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
   displayInventory();
})

function displayInventory() {
    connection.query("SELECT * FROM products", function(err, res){
        if(err) throw err;
        
        var products = [];
        for (var i = 0; i < products.length; i++){
            console.log(
                "Item ID: " + products[1].item_id + "\n",
            );
        }
        // TODO: how to loop through an array of objects
        // for(var i = 0; i < products.length; i++){
        //     console.log(res[i])
        // };
        // console.log(res);
        connection.end();        
    })
};

//function which ask user ID of product & how many units 
// function buySomething() {
//     inquirer
//     .prompt([
//         name: "product",
//         type: "input",
//         message: "Please enter the ID of the item you would like to purchase.",
//         validate: function(value){
//             if(isNaN(value) === false) {
//                 return true;
//             }
//             return false;
//         }
//     ]).then(function(answer){
//         if(answer)
//     })
// }


//check if the store has enough of the product

