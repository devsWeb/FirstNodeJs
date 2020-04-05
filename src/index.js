const colors = require('colors');
const express = require('express');
const path = require('path');
const app = express();
//setings
app.set('port', 8000);
app.set('views', path.join(__dirname,'views'));
//Voy a usar archivos html y voy a procesarlos con ejs
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

//midlewares

//routes
app.use(require('./routes/index'));


//static files

app.use(express.static(path.join(__dirname,'public')));
//listening
app.listen(app.get('port'),(req,res) => {
    console.log('SERVER RUN: '.bgBlack);

});


