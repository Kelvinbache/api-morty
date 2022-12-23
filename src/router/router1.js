const express = require("express");

//uniendo el llmado de router
const router = express.Router();

router.get('/',(req,res)=>{
     res.render('hello.ejs');
})

router.get('/api-Morty',(req,res)=>{
    res.send('hello i am from api-Morty ');
})

module.exports = router;