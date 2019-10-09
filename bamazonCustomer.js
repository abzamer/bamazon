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
   afterConnection();
})

function afterConnection(){
    connection.query("SELECT * FROM products", function(err,res){
        if(err) throw err;
        console.log(res);
        connection.end();
    })
}