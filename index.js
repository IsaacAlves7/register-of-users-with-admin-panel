// ODM
const mongoose = require("mongoose");

const url = "mongodb+srv://IsaacAlves7:tbyC-9aHVWmNw9S@cluster0.dbnligb.mongodb.net/?retryWrites=true&w=majority"; // localhost

const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

// Middlewares
const express = require("express");
const app = express();

// for user routes
const userRoute = require('./routes/userRoute');
app.use('/',userRoute);

app.listen(3000, function(){
    console.log('Server is running!')
});