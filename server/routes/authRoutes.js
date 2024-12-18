

import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../database/db.js";
import dotenv from 'dotenv';

dotenv.config();

const Router = express.Router();

//register endpoint, registers a user
Router.post('/register', async (req, res) => {
    console.log('Register request received');   
    const { name, surname, phone_number, email, password } = req.body;

    if (!name, !surname, !phone_number, !email, !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    //checks duplicate users
    try {
        const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userExists.rows.length > 0) {
            return res.status(200).json({ error: 'Email already exists' });
        }

        const saltRounds = 5;
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const newUser = await pool.query(
            'INSERT INTO users (name, surname, phone_number, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *', 
            [name, surname, phone_number, email, hashedPassword]
        );

        const user = newUser.rows[0];

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h'}
        );

        res.status(201).json({
            message: 'User successfully registered',
            user: { id: user.id, name: user.name, email: user.email, surname: user.surname, phone_number: user.phone_number },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error'});
    }
});

Router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if(result.length === 0) {
            return res.status(401).json({ error: 'Email is incorrect' });
        }

        const user = result.rows[0];

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(401).json({ error: 'Password is incorrect' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email},
            process.env.JWT_SECRET,
            { expiresIn: '1h'}
        
        );

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred during login' });
    }



})

export { Router };