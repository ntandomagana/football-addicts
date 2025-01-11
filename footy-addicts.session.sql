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


DROP TABLE IF EXISTS pitches;

SELECT * FROM pitches;


CREATE TABLE IF NOT EXISTS pitches (
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    image_URL VARCHAR(255) NOT NULL,
    rating DECIMAL NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL NOT NULL,
    duration VARCHAR(20)
);

INSERT INTO pitches (name, address, image_URL, rating, description, price, duration)
VALUES
-- UJ Orban Hockey Field
('UJ Orban Hockey Field', 
 'Korea Rd & Ayr Rd, Melville, Johannesburg',
 'https://www.thewanderersclub.co.za/wp-content/uploads/2023/02/hockey3.jpg',
 4.2,
 'A beautifully maintained pitch with plenty of room to show off your skills. This pitch is located in the heart of Johannesburg.',
 300,
 '60 minutes'),

-- Linden Swimming Pool
('Linden Swimming Pool', 
 'Corner and, 4th Ave &, 11th St, Linden, Randburg, 2104',
 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/b9/af/47/caption.jpg?w=1400&h=800&s=1',
 4.9,
 'Experience premium turf designed for every player, from beginners to pros. A crowd favorite.',
 350,
 '60 minutes'),

-- Wits Hockey Astro
('Wits Hockey Astro', 
 '26 Hans Pirow Rd, Bruma, Johannesburg',
 'https://lh3.googleusercontent.com/p/AF1QipPgzxx_ZTeE-BHclxT2_SbncR2bDWRn76PVMeJN=s1360-w1360-h1020',
 4.6,
 'Score big on this top-tier soccer pitch with plenty of space for 5-a-side games!',
 450,
 '60 minutes'),

-- Balfour Park
('Balfour Park', 
 'Athol Road &, Johannesburg Rd, Highlands North',
 'https://lh3.googleusercontent.com/p/AF1QipP4FqLOdD-B6yjmLMPECt97DSJZS8fUkXqlBuHO=s1360-w1360-h1020',
 4.8,
 'Enjoy a smooth surface and fantastic atmosphere, ideal for all skill levels.',
 300,
 '55 minutes'),

-- Wits Marks Park
('Wits Marks Park', 
 'Judith Rd, Emmarentia, Randburg, 2194',
 'https://lh3.googleusercontent.com/p/AF1QipMOIFEcivFwXH4MHlPpn4xv0Ipo68ShA82aKNDH=s1360-w1360-h1020',
 4.5,
 'Whether it’s a friendly kickaround or a serious showdown, this pitch is ready for you.',
 300,
 '60 minutes'),

-- Glenhazel Courts (JHB)
('Glenhazel Courts (JHB)', 
 'Swemmer Rd, Glenhazel, Johannesburg, 2192',
 'https://lh3.googleusercontent.com/p/AF1QipMDD-8UHWSH3Umo5dpn9jlCCgw5OeuvJZYbF_mx=s1360-w1360-h1020',
 4.6,
 'Spacious and well-lit, this pitch is perfect for evening games and sunny weekend matches.',
 500,
 '60 minutes');


SELECT * FROM pitches;




