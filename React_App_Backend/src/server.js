import express from 'express';
const app = express();
import { MongoServerSelectionError } from 'mongodb';
const mongoose = require('mongoose');
// require('dotenv').config({ path: './env' })
const dotenv = require('dotenv');
const signup = require('./routes/signup');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database is connected"));

app.use(express.json());
app.use(cors());
app.use('/api', signup);

const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`server is running on ${port}...`))