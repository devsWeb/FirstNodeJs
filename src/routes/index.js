//Crear server para rutas
const express = require('express');
const router = express.Router();

    router.get('/',(req,res)=>{
    //    res.sendFile(path.join(__dirname,'./views/index.html'));
        res.render('index.html', {title:'First Website'});
    });
    router.get('/about',(req,res)=>{
        res.render('about.html', {title:'First Website'});
    });
    router.get('/contact',(req,res)=>{
        res.render('contact.html', {title:'First Website'});
    });

    module.exports = router;