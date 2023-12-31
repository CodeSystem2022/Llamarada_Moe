CREATE TABLE tareas {
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) UNIQUE NOT NULL,
    desc TEXT, NOT NULL,
};

CREATE TABLE users {
    id SERIAL PRIMARY KEY,
    name VARCHAR(22) NOT NULL,
    email VARCHAR(22) UNIQUE NOT NULL,
    pass VARCHAR(22) NOT NULL,
    registry_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
};