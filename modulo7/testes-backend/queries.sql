-- Active: 1659117235102@@35.226.146.116@3306@gebru-4212061-vinicius-passo
CREATE TABLE User_Arq (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) DEFAULT "NORMAL"
);


