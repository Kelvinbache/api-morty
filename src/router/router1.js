const express = require("express");

//uniendo el llmado de router
const router = express.Router();

router.get('/',(req,res)=>{
     res.send("sony inicio de la pagina")
});

router.get('/api-Morty',(req,res)=>{
    res.render('hello.ejs')
});

module.exports = router;