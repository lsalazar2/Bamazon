-- Create a database called 'Bamazon_DB' 

CREATE DATABASE Bamazon_DB;
USE Bamazon_DB;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INTEGER(11) NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Fire TV Stick', 'Electronics', 39.99, 1000),
		('Echo', 'Electronics', 99.99, 700),
		('iRobot Roomba', 'Home & Kitchen', 399.00, 400),
		('Rice Cooker', 'Home & Kitchen', 39.99, 200),
		('SharkNinja Canister Upright Vacuum', 'Home & Kitchen', 399.99, 250),
		('Ivory Soap, Original 4 oz Bars 10 ea', 'Beauty', 22.99, 10000),
		('Horizon Organic Milk', 'Grocery', 4.50, 200),
		('Huggies Diapers', 'Children', 29.99, 476),
		('Mens Uggs Slippers', 'Shoes', 115.00, 35),
		('Crest 3D White Whitestrips', 'Beauty', 34.99, 330),
		('Yoga Mat', 'Sports', 15.50, 150),
		('Band Aid', 'Pharmacy', 6.99, 550);