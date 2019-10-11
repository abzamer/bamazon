# BAmazon
This app is an Amazon-like storefront that uses MySQL to take in orders from customers and deplete stock from the store's inventory.

## Technologies
* MySQL
* Inquirer npm
* DotEnv 
* JavaScript
* Node.js

## Launch
To use BAmazon, ensure above technologies are installed. Once installed, bamazon can be used by inputing the following into the command line:
* node bamazonCustomer.js
The app will display its inventory of products to purchase. You will be prompted to enter the item ID and quantity to be purchased. If BAmazon has enough inventory of said product, it will display your total cost. Otherwise, the following message will display and the program can be run again to choose a different product:
*Our apologies. We do not have enough to fulfill your request. Try choosing another quantity or item.

## Video and Screenshots
The following videos are demonstrations of the BAmazon app in action. 

This video demonstrates what happens if quantity requested can be fulfilled by BAmazon
* https://drive.google.com/file/d/1nVzq66vxGHwM_lx9q7RxtrID5_Ns7u1A/view

This video demonstrates what happens if quantity requested exceeds BAmazon inventory
* https://drive.google.com/file/d/193wS5WUUod-IhaAcqW_udN5iPUSPTl7c/view

### Screenshots
![MySQL Schema](./images/sqlschema.jpg)
![Inventory Function](./images/inventoryfunction.jpg)



