import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

// test database
const jobsInfo = {
    'Post_2': {
        upvotes: 0,
        comments: [],
    },
    'Post_1': {
        upvotes: 0,
        comments: [],
    },
    'Post_3': {
        upvotes: 0,
        comments: [],
    },
}

const app = express();

app.use(bodyParser.json());

app.post('/api/job/:name/upvote', (req, res) => {

    // access this field using the above url :name parameter
    const jobName = req.params.name;
     

    jobsInfo[jobName].upvotes += 1;

    // send message to client how many upvotes Job has. jobInfo with key article name
    res.status(200).send(`${jobName} now has ${jobsInfo[jobName].upvotes} upvotes`);
});

app.post('/api/job/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const jobName = req.params.name;

    jobsInfo[jobName].comments.push({ username, text });

    res.status(200).send(jobsInfo[jobName]);
})

app.listen(8000, () => console.log('Listening on port 8000'));

// Code to run node
// npx babel-node src/server.js
// npx nodemon --exec npx babel-node src/server.js
// npm start
// postman request set up
// {
//     "username": "this is the user",
//     "text": "This is the text from the user"
// }