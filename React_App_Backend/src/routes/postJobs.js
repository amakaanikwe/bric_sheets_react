const express = require('express');
const router = express.Router();
const createJobTemplateCopy = require('../models/CreateJobModel');

router.post("/postjob", (req, res)=>{
    const newPost = new createJobTemplateCopy ({
        username:req.body.username,
        company:req.body.company,
        jobTitle:req.body.jobTitle,
        jobType:req.body.jobType,
        jobDetails:req.body.jobDetails,
        phoneNumber:req.body.phoneNumber,
        email:req.body.email,
    })
    newPost.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err => {
        res.json(err)
    })
});

router
    .route("/postjob/:id")
        .get((req, res)=>{ })
        .delete((req, res)=>{ })



module.exports = router;