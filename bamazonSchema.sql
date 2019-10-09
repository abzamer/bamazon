CREATE DATABASE bamazon_db;
USE bamazon_db;
-- item_id (unique id for each product)
-- product_name (Name of product)
-- department_name
-- price (cost to customer)
-- stock_quantity (how much of the product is available in stores)


CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(60) NOT NULL,
department_name VARCHAR(40) NOT NULL,
price INT NOT NULL,
stock_quantity INT NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("diapers", "baby", 20, 1000),
("Nintendo Switch", "Electronics", 300, 30),
("Halloween wreath", "home decor", 30, 25),
("Mrs. Meyer's Everyday Cleaner", "Cleaning", 6, 123),
("lightbulb", "home improvement", 5, 331),
("baby wipes", "baby", 6, 21),
("Advil", "Health", 4, 56),
("Hand Sanitizer", "Health", 2, 89),
("Canned air", "Office", 6, 1000),
("necklace", "jewelry", 14, 60),
("Coffee maker", "Kitchen", 40, 34);



SELECT * FROM products;