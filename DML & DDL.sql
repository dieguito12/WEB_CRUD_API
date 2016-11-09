CREATE DATABASE WebCrud;

use WebCrud;

CREATE TABLE users(
id INT NOT NULL AUTO_INCREMENT,
username VARCHAR(50) NOT NULL,
userpassword VARCHAR(50) NOT NULL,
phoneNumber VARCHAR(50),
mail VARCHAR(100),
address VARCHAR(250),
isAdmin bool,
PRIMARY KEY (id)
);

INSERT INTO users(username,userpassword, phoneNumber, mail, address, isAdmin)
values('franci', '1234','8297273705','franci@gmail.com','km 12 indepenedencia, calle dolly',true)