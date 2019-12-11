const express = require("express");

const bodyParser = require("body-parser");

const routes = require("./routes/api"); // so that we can access routes

const mongoose = require("mongoose");
// set up express app
const app  = express();  // comes with http methods

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');//will create ninjago database


mongoose.Promise = global.Promise;


app.use(bodyParser.json());//will pass json data and attatch it to request

//initialise routes
app.use('/api',routes); //uses routes -- so that you didnt have to put api down each time



//listen for request
app.listen(4000,function(){
  console.log("now listening to port 4000");
});
