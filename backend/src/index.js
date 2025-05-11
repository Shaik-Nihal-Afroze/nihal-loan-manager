import express from 'express';

import cors from 'cors';

import dotenv from 'dotenv';

import cookieParser from 'cookie-parser';

import getUsers from './routes/users.js';

import getAllApplications from './routes/applications.js';


import { connectDB } from './lib/db.js';


const app = express();

dotenv.config();


app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  'http://localhost:5173',         // local frontend
  'https://loan-manager-credit-app-backend.onrender.com', // optional for Render-origin requests
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use("/api/auth",getUsers); 
app.use("/api/applications", getAllApplications);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
})