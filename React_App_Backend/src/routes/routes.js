const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');

router.post("/signup", (req, res)=>{
    const newUser = new signUpTemplateCopy({
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    })
    newUser.save()
    .then(data=>{
        res.json(data);
    })
    .catch(err => {
        res.json(err)
    })
});




module.exports = router;