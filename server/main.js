import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import { Router } from "./routes/authRoutes.js";
import {  pitchRoutes } from "./routes/pitch";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(express.json());
app.use('/users', Router)
app.use('/pitches', pitchRoutes)

export { app };