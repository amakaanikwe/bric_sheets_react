import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/hello', (req, res) => res.send('Hello!'));
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}`));

app.listen(8000, () => console.log('Listening on prt 8000'));

// Code to run node
// npx babel-node src/server.js