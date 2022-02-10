
USE emeraldOasis;

CREATE TABLE roles (
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    role VARCHAR(20)
);

CREATE TABLE franchises (
	franchise_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(40),
    email VARCHAR(40),
    gender VARCHAR(10),
    birthdate DATE,
    password VARCHAR(512),
    phone_no VARCHAR(20),
    location VARCHAR(40),
    budget INT,
    status VARCHAR(10),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

CREATE TABLE users (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	firstname VARCHAR(40),
    lastname VARCHAR(40),
    profile_photo BLOB,
    birthdate DATE,
	gender VARCHAR(10),
    email VARCHAR(50),
    password VARCHAR(512),
    phone_no VARCHAR(20),
    card_no VARCHAR(20),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

CREATE TABLE employee_details (
	emp_id INT PRIMARY KEY AUTO_INCREMENT,
	address VARCHAR(255),
    uid VARCHAR(20),
    pan VARCHAR(20),
    joindate DATE,
    salary DECIMAL,
    status VARCHAR(20)
);

CREATE TABLE emp_rating (
    emp_rating_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT,
    customer_id INT,
    rating INT,
    FOREIGN KEY (employee_id) REFERENCES employee_details(emp_id),
    FOREIGN KEY (customer_id) REFERENCES users(user_id)
);

CREATE TABLE vehicles (
    vehicle_id INT PRIMARY KEY AUTO_INCREMENT,
    vehicle_no VARCHAR(40),
    rc VARCHAR(40),
    license_number VARCHAR(20),
    emp_id INT,
    FOREIGN KEY (emp_id) REFERENCES employee_details(emp_id)
);

CREATE TABLE cuisines (
	cuisine_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(40),
    image blob
);

CREATE TABLE food_items (
	item_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(40),
    description VARCHAR(255),
    image BLOB,
    price DECIMAL,
    cuisine_id INT,
    availability INT,
    FOREIGN KEY (cuisine_id) REFERENCES cuisines(cuisine_id)
);

CREATE TABLE address (
	address INT PRIMARY KEY AUTO_INCREMENT,
	address_details VARCHAR(255),
    area VARCHAR(20),
    city VARCHAR(20),
    state VARCHAR(20),
    pincode VARCHAR(10),
    customer_id INT,
    address_type VARCHAR(20),
    FOREIGN KEY (customer_id) REFERENCES users(user_id)
);

CREATE TABLE order_status (
	status_id INT PRIMARY KEY AUTO_INCREMENT,
    status VARCHAR(20)
);

CREATE TABLE orders (
	order_id INT PRIMARY KEY AUTO_INCREMENT,
	customer_id INT,
    address_id INT,
    oredred_datetime TIMESTAMP,
    completed_datetime TIMESTAMP,
    total_amount DECIMAL,
    discount_percentage INT,
    discounted_amount DECIMAL,
    status_id INT,
    order_type_id VARCHAR(20),
    emp_id INT,
    FOREIGN KEY (customer_id) REFERENCES users(user_id),
    FOREIGN KEY (address_id) REFERENCES address(address),
    FOREIGN KEY (status_id) REFERENCES order_status(status_id),
    FOREIGN KEY (emp_id) REFERENCES employee_details(emp_id)
);

CREATE TABLE order_details (
	order_details INT PRIMARY KEY AUTO_INCREMENT,
	item_id INT,
    quantity INT,
    price INT,
    order_id INT,
    FOREIGN KEY (item_id) REFERENCES food_items(item_id),
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

CREATE TABLE offers (
	offer_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(40),
    discount_percentage INT,
    image BLOB
    );