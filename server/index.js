import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {connectionDB} from './db/config.js';

import postRoutes from './routes/posts.js';
connectionDB();
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`App is running on port ${process.env.PORT}`);
});