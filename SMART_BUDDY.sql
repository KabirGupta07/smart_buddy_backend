CREATE DATABASE smart_buddy;
CREATE TABLE users(
userId int(64),
username varchar(255),
password varchar(255),
created_at date,
updated_at date,
primary key(userId)
);

CREATE TABLE retail(
retail_id  int unique,
created_at date,
updated_at date,
productSKU varchar(30),
brand varchar(30),
quantity int,
price int,
total int,
primary key(retail_id)
);

CREATE TABLE contextual(
contextual_id int auto_increment unique,
created_at date,
updated_at date,
primary key(contextual_id)
);
