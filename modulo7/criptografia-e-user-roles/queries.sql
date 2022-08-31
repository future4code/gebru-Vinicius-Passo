-- Active: 1659117235102@@35.226.146.116@3306@gebru-4212061-vinicius-passo
CREATE TABLE Face_User (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(65) NOT NULL
);
CREATE TABLE Architecture_Task (
	id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    deadline VARCHAR(255)  NOT NULL,
    author_id varchar(255) NOT NULL,
    FOREIGN KEY (author_id) REFERENCES Architecture_User(id)
);

