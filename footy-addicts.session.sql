CREATE TABLE IF NOT EXISTS users (
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

CREATE TABLE IF NOT EXISTS pitches (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    image_URL VARCHAR(255) NOT NULL,
    rating DECIMAL NOT NULL
)

--pitch component 
INSERT INTO pitches (name, address, image_URL, rating)
VALUES
-- UJ Orban Hockey Field
('UJ Orban Hockey Field', 
'Korea Rd & Ayr Rd, Melville, Johannesburg',
'/images/pitch-1.png',
4.6),

-- Wits Sports Society
('Wits Sports Society', 
'Raikes Rd, Johannesburg, 2000',
'/images/pitch-2.png',
4.6),

-- Home of Wits Hockey
('Home of Wits Hockey', 
'26 Hans Pirow Rd, Bruma, Johannesburg',
'/images/pitch-3.png',
4.6),

-- Morninghill Football Arena
('Balfour Park', 
'Athol Road &, Johannesburg Rd, Highlands North',
'/images/pitch-4.png',
4.6),

-- Wits Marks Park
('Wits Marks Park', 
'Judith Rd, Emmarentia, Randburg, 2194',
'/images/pitch-5.png',
4.6),

-- Glenhazel Courts (JHB)
('Glenhazel Courts (JHB)', 
'Swemmer Rd, Glenhazel, Johannesburg, 2192',
'/images/pitch-6.png',
4.6);
