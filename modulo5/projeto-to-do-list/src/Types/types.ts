export type Users = {
    id: string,
    name: string,
    nickname: string,
    email: string
}

// id VARCHAR(255) PRIMARY KEY, 
// name VARCHAR(255) NULL, 
// nickname VARCHAR(255) UNIQUE NOT NULL, 
// email VARCHAR(255) UNIQUE NOT NULL