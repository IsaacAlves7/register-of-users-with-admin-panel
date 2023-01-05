// Middlewares
const express = require("express");
const user_route = express();

user_route.set('view engine','ejs');
user_route.set('views','./views/users');

const bodyParser = require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true})); 

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname, '../public/upload'));
    },
    filename:function(req,file,cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name);
    }
});

const upload = multer({storage:storage});

const userController = require("../controllers/userController");

user_route.get('/cadastro-de-membros',userController.loadRegister);

user_route.post('/cadastro-de-membros',upload.single('image'),userController.insertUser);

module.exports = user_route;