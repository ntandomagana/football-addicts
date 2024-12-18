CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
INSERT INTO users (name, surname, email, phone_number, password) 
VALUES
('maboku', 'seimela', 'maboku@gmail.com', '0123456789', '000000'),
('ofentse', 'mahlangu', 'ofentse@gmail.com', '0123456789', '000000');
