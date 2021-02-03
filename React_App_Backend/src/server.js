import express from 'express';
const app = express();
import { MongoServerSelectionError } from 'mongodb';
const mongoose = require('mongoose');
// require('dotenv').config({ path: './env' })
const dotenv = require('dotenv');
const cors = require('cors');
const passport = require('passport');
const passportlocal = require('passport-local').strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser');

const signup = require('./routes/signup');
// const postJobs = require('./routes/postJobs');

dotenv.config();
//---------------------------- END OF IMPORTS  ---------------------------------

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database is connected"));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:4000', //<-- Location of react app connecting to
    credentials: true
}));

app.use(session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser('secretcode'))

// API endpoints
app.use('/api', signup);
// app.use('/api', postJobs);

app.post('/api/login', (req,res) => {

})



const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`server is running on ${port}...`))