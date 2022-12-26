const express = require("express");

//uniendo el llmado de router
const router = express.Router();

router.get('/',(req,res)=>{
     res.render('Inicio.ejs')
});

router.get('/api-Morty',(req,res)=>{
    res.render('hello.ejs')
});

module.exports = router;