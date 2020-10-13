import express from 'express';
import bodyParser from 'body-parser';

// test database
const jobsInfo = {
    'Post_2': {
        upvotes: 0,
    },
    'Post_1': {
        upvotes: 0,
    },
    'Post_3': {
        upvotes: 0,
    },
}

const app = express();

app.use(bodyParser.json());

app.post('/api/job/:name/upvote', (req, res) => {

    // access this field using the above url :name parameter
    const jobName = req.params.name;

    jobsInfo[jobName].upvotes += 1;

    // send message to client how many upvotes Job has. jobInfo with key article name
    res.status(200).send(`${jobName} now has ${jobsInfo[jobName].upvotes} upvotes`)
})

app.listen(8000, () => console.log('Listening on port 8000'));

// Code to run node
// npx babel-node src/server.js