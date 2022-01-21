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
    profilePhoto BLOB,
    birthdate DATE,
    gender VARCHAR(10),
    cardNo VARCHAR(20) UNIQUE,
    roleId INTEGER,
    FOREIGN KEY (roleId) REFERENCES Role(roleId)
);

CREATE TABLE Address (
    addressId INTEGER PRIMARY KEY auto_increment,
    details VARCHAR(255),
    area VARCHAR(20),
    city VARCHAR(20),
    state VARCHAR(20),
    pincode VARCHAR(10),
    userId INTEGER,
    addressType VARCHAR(20),
    FOREIGN KEY (userId) REFERENCES User(userId)
);
