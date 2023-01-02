// Middlewares
const express = require("express");
const employeeRoute = express();

const bodyParser = require("body-parser");
employeeRoute.use(bodyParser.json());
employeeRoute.use(bodyParser.urlencoded({extended:true}));

// Pug Template Engine
employeeRoute.set('view engine', 'pug');
employeeRoute.set('views', './views');

// Cadastro de Membros
const employeeController = require("../controllers/employeeController");
employeeRoute.get('/cadastro-de-membros',function(req, res){
    res.render("cadastro-de-membros");
});

employeeRoute.post('/cadastro-de-membros',employeeController.insertEmployee);

// Exporting module
module.exports = employeeRoute;