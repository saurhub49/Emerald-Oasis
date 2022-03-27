CREATE TABLE Role (
    roleId INTEGER PRIMARY KEY auto_increment,
    roleName VARCHAR(20) UNIQUE
);

CREATE TABLE User (
    userId INTEGER PRIMARY KEY auto_increment,
    firstName VARCHAR(40),
    lastName VARCHAR(40),
    email VARCHAR(50) UNIQUE,
    password VARCHAR(512),
    phoneNo VARCHAR(20) UNIQUE,
    addressLine VARCHAR(512),
    birthdate DATE,
    gender VARCHAR(10),
    cardNo VARCHAR(20) UNIQUE,
    roleId INTEGER,
    FOREIGN KEY (roleId) REFERENCES Role(roleId)
);


CREATE TABLE Cuisine (
    cuisineId INTEGER PRIMARY KEY auto_increment,
    name VARCHAR(50) UNIQUE,
    image VARCHAR(512)
);

CREATE TABLE FoodItem (
    foodItemId INTEGER PRIMARY KEY auto_increment,
    name VARCHAR(50) UNIQUE,
    description VARCHAR(512),
    image VARCHAR(512),
    price DOUBLE,
    quantity INTEGER,
    cuisineId INTEGER,
    FOREIGN KEY (cuisineId) REFERENCES Cuisine(cuisineId)
);

CREATE TABLE Orders (
    orderId INTEGER PRIMARY KEY auto_increment,
    orderedTimeStamp TIMESTAMP,
    deliveredTimeStamp TIMESTAMP,
    totalAmount DOUBLE,
    orderStatus VARCHAR(50),
    userId INTEGER,
    employeeId INTEGER,
    FOREIGN KEY (userId) REFERENCES User(userId),
    FOREIGN KEY (employeeId) REFERENCES User(userId)
);

CREATE TABLE OrderDetails (
    orderDetailsId INTEGER PRIMARY KEY auto_increment,
    foodItemId INTEGER,
    orderId INTEGER,
    FOREIGN KEY (foodItemId) REFERENCES FoodItem(foodItemId),
    FOREIGN KEY (orderId) REFERENCES Orders(orderId)
);


CREATE TABLE EmployeeDetails (
    employeeDetailsId INTEGER PRIMARY KEY auto_increment,
    userId INTEGER,
    uid VARCHAR(20),
    panCard VARCHAR(20),
    joinDate DATE,
    salary DOUBLE,
    FOREIGN KEY (userId) REFERENCES User(userId)
);


CREATE TABLE Vehicle (
    vehicleId INTEGER PRIMARY KEY auto_increment,
    vehicleNo VARCHAR(20),
    rc VARCHAR(20),
    lincenseNo VARCHAR(20),
    employeeId INTEGER,
    FOREIGN KEY (employeeId) REFERENCES employeeDetails(employeeDetailsId)
);
