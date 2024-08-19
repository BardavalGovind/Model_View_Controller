// C:\Users\govind\OneDrive\Desktop\Handlebar1\routers\auth.js
const express = require('express');
const Myusers = require('../models/users');
const router = express.Router();
router.post('/', (req, res) => {
    // console.log('Headers:', req.headers);
   /* console.log(req.body.email);
    res.send("authentication successfull"); */
 let user = Myusers.find(user => user.email === req.body.email && user.password === req.body.password);
   if(user){
    res.send(user);
   }
    else{
        res.status(401).send("Invalid username/password");
    }  
    
});
module.exports = router;