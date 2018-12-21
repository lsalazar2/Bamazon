# Bamazon
Use MYSQL to manage inventory
MySQL

## Overview

I created an Amazon-like storefront with MySQL to take in orders from customers and deplete stock from the store's inventory. The program will also track product sales across the store's departments and then provide a summary of the highest-grossing departments in the store.

This app uses the SQL and Inquirer npm packages for data input and storage.

# Link to the screenshots/gif:

# Link to the video (using):

1. Run program from a customer perspectice.

A MYSQL database was created called `bamazon`with a Table called `products`. The consumer products have the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

There are 12 different products to choose from to buy.

A Node application called `bamazonCustomer.js`will display all of the items available for sale including: the ids, names, and prices of products for sale.

You will then be prompted for the ID of the product you would like to buy and then how many units of the product you want.

The application will check if the Bamazon store has enough of the product in stock. If not, the app will prompt you for a quantity <= to the stock amount. If there is enough in stock, you order will be placed and you will be shown the total costs. The store's current stock will be decremented by the amount ordered.

to run this program open a terminal and type:
"node bamazoncustomer.js

2.Run the application from a store manager perspective.
This node  application is called `bamazonManager.js` and will:

  * List menu options:

    * 'View Products for Sale' - will list every available item: the item IDs, names, prices, and quantities
    
    * 'View Low Inventory' - will list all items with an inventory count lower than five.

    * 'Add to Inventory' - will display a prompt to let the manager "add more" of any item currently in the store.
    
    * Add New Product - will allow the manager to add a brand new product to the store.

