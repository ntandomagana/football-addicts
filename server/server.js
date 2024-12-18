const express = require('express');
const dotenv = require('dotenv');
const { pool } = require('../server/database/db.js');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(` server running`));