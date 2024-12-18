
import http from "http";
import { app } from "./main.js"

const PORT = process.env.PORT || 3000;

const server = http.createServer(app).listen(PORT);