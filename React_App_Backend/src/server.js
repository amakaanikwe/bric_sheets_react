import express from 'express';

const app = express();

app.get('/hello', (req, res) => res.send('Hello!'));

app.listen(8000, () => console.log('Listening on prt 8000'));

// Code to run node
// npx babel-node src/server.js