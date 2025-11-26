// src/app.js
import express from 'express';
import mostrarCarros from './router/router.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // front do Vite
}));    

app.use(express.json());

app.use(mostrarCarros)



export default app;
