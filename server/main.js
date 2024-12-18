import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import { Router } from "./routes/authRoutes.js";


const app = express();
app.use(cors);
app.use(bodyParser.json());

app.use('/users', Router)

export { app };