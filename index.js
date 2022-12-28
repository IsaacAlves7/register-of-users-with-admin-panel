// ODM
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017");// localhost

// Middleware
const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/cadastro-de-membros',function(req,res){
    res.render("cadastro-de-membros");
});

app.post('/cadastro-de-membros',function(req,res){
    res.send(req.body);
});

app.get('/login',function(req,res){
    res.render("login");
});

app.listen(3000,function(){
    console.log('Server is running!')
})