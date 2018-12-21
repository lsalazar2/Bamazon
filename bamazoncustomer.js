// Pull in required dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');

// Define the MySQL connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// Your username
	user: 'root',

	// Your password
	password: 'root',
	database: 'Bamazon_DB'
});

// validateInput makes sure that the user is supplying only positive integers for their inputs
function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}

// prompt user for the item/quantity they would like to purchase and check if it's in stock
function buy_Item() {

	// Prompt the user to select an item
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item which you would like to purchase:',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many would you like?',
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {
		console.log('You selected: \n    item_id = '  + input.item_id + '\n    quantity = ' + input.quantity);

		var item = input.item_id;
		var quantity = input.quantity;

		// Query db to see if item ID exists in the quantity requested
		var requestData = 'SELECT * FROM products WHERE ?';

		connection.query(requestData, {item_id: item}, function(err, data) {
			if (err) throw err;

			// User has selected an invalid item ID, data array will be empty
			// console.log('data = ' + JSON.stringify(data));

			if (data.length === 0) {
				console.log('ERROR: Invalid Item. Please select a valid Item.');
				displayInventory();

			} else {
				var productData = data[0];

				console.log('productData = ' + JSON.stringify(productData));
				console.log('productData.stock_quantity = ' + productData.stock_quantity);

				// If the quantity requested by the user is in stock
				if (quantity <= productData.stock_quantity) {
					console.log('Placing order');

					// updating query string
					var updaterequestData = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
					console.log('updaterequestData = ' + updaterequestData);

					// Update the inventory
					connection.query(updaterequestData, function(err, data) {
						if (err) throw err;

						console.log('Order placed. Your total is $' + productData.price * quantity);
						console.log('Thank you for shopping with Bamazon');

						// End the database connection
						connection.end();
					})
				} else {
					console.log("We're  sorry, there is not enough in stock. Please modify your order to a quantity <=" + productData.stock_quantity);

					displayInventory();
				}
			}
		})
	})
}

// displayInventory will retrieve and display the current inventory 

function displayInventory() {

	// Construct the db query string
	requestData = 'SELECT * FROM products';

	// Make the db query
	connection.query(requestData, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');
		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item: ' + data[i].item_id + ' ';
			strOut += 'Product Name: ' + data[i].product_name + ' ';
			strOut += 'Department: ' + data[i].department_name + ' ';
			strOut += 'Price: $' + data[i].price + '\n';

			console.log(strOut);
		}

	  	//Prompt the user for item/quantity they would like to purchase
	  	buy_Item();
	})
}

// Display the available inventory
displayInventory();
