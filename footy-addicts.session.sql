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


DROP TABLE IF EXISTS pitches;

SELECT * FROM pitches;


CREATE TABLE IF NOT EXISTS pitches (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    image_URL VARCHAR(255) NOT NULL,
    rating DECIMAL NOT NULL
)

INSERT INTO pitches (name, address, image_URL, rating)
VALUES
-- UJ Orban Hockey Field
('UJ Orban Hockey Field', 
'Korea Rd & Ayr Rd, Melville, Johannesburg',
'https://www.thewanderersclub.co.za/wp-content/uploads/2023/02/hockey3.jpg',
4.2),

-- Wits Sports Society
('Linden Swimming Pool', 
'Corner and, 4th Ave &, 11th St, Linden, Randburg, 2104',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/b9/af/47/caption.jpg?w=1400&h=800&s=1',
4.9),

-- Home of Wits Hockey
('Wits Hockey Astro', 
'26 Hans Pirow Rd, Bruma, Johannesburg',
'https://lh3.googleusercontent.com/p/AF1QipPgzxx_ZTeE-BHclxT2_SbncR2bDWRn76PVMeJN=s1360-w1360-h1020',
4.6),

-- Morninghill Football Arena
('Balfour Park', 
'Athol Road &, Johannesburg Rd, Highlands North',
'https://lh3.googleusercontent.com/p/AF1QipP4FqLOdD-B6yjmLMPECt97DSJZS8fUkXqlBuHO=s1360-w1360-h1020',
4.8),

-- Wits Marks Park
('Wits Marks Park', 
'Judith Rd, Emmarentia, Randburg, 2194',
'https://lh3.googleusercontent.com/p/AF1QipMOIFEcivFwXH4MHlPpn4xv0Ipo68ShA82aKNDH=s1360-w1360-h1020',
4.5),

-- Glenhazel Courts (JHB)
('Glenhazel Courts (JHB)', 
'Swemmer Rd, Glenhazel, Johannesburg, 2192',
'https://lh3.googleusercontent.com/p/AF1QipMDD-8UHWSH3Umo5dpn9jlCCgw5OeuvJZYbF_mx=s1360-w1360-h1020',
4.6);

UPDATE pitches
SET image_url = 'https://lh3.googleusercontent.com/p/AF1QipMDD-8UHWSH3Umo5dpn9jlCCgw5OeuvJZYbF_mx=s1360-w1360-h1020'
WHERE id = 6;

UPDATE pitches
SET address = 'Swemmer Rd, Glenhazel, Johannesburg, 2192'
WHERE id = 6;

SELECT * FROM pitches;

ALTER TABLE pitches
ADD COLUMN price NUMERIC(10, 2),
ADD COLUMN duration VARCHAR(20);


UPDATE pitches 
SET price = 300,
duration = '60 minutes'
WHERE id IN (1, 2, 3, 4, 5, 6);


SELECT * FROM pitches;



