const express = require('express');
const router = express.Router();
const { Pool } = require('pg');


//this route gets all the pitches
router.get('/pitches', async (req, res) => {
    try {
        const result = await Pool.query('SELECT * FROM pitches')
        res.status(200).json(result.rows);
    } catch (err) {
        console.error('Error fetching pitches:', err);
        res.status(500).json({ message: 'Failed to fetch pitches'})
    }
})

router.get('/pitches/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM pitches WHERE id = $1', [id])
        if(result.rows.length === 0) {
            return res.status(404).json({ message: 'Pitch not found'})
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error('Error fetching pitch:', err);
        res.status(500).json({ message: 'Failed to fetch pitch'})
    }
})