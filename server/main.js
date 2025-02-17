import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import { Router } from "./routes/authRoutes.js";
import { router as  pitchRoutes } from "./routes/pitchRoutes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
// app.use('/images', express.static(path.join(__dirname, 'public/images')));


app.use(express.json());
app.use('/users', Router)
app.use('/pitches', pitchRoutes)

export { app };