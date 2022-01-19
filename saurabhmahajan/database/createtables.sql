CREATE TABLE Role (
    role_id INTEGER PRIMARY KEY auto_increment,
    role_name VARCHAR(20) UNIQUE
);

CREATE TABLE User (
    user_id INTEGER PRIMARY KEY auto_increment,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    profile_photo BLOB,
    birthdate DATE,
    gender VARCHAR(10),
    email VARCHAR(50) UNIQUE,
    password VARCHAR(512),
    phone_no VARCHAR(20) UNIQUE,
    card_no VARCHAR(20) UNIQUE,
    role_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES Role(role_id)
);

CREATE TABLE Address (
    address_id INTEGER PRIMARY KEY auto_increment,
    details VARCHAR(255),
    area VARCHAR(20),
    city VARCHAR(20),
    state VARCHAR(20),
    pincode VARCHAR(10),
    user_id INTEGER,
    address_type VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
