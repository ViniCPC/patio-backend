// src/app.js
import express from 'express';
import mostrarCarros from './router/router.js';
import cors from 'cors';

const app = express();

app.use(cors()); // ✅ libera para qualquer frontend (Vercel, localhost, etc)

app.use(express.json());
app.use(mostrarCarros);

export default app;
