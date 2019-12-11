const express = require("express");

const bodyParser = require("body-parser");

const routes = require("./routes/api"); // so that we can access routes

const mongoose = require("mongoose");
// set up express app
const app  = express();  // comes with http methods

// connect to mongodb
//mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true });//will create ninjago database

mongoose.connect('mongodb://localhost/ninjago',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('Database Connection Successful!!'))
.catch(err => console.error(err));


mongoose.Promise = global.Promise;

app.use(express.static("public"));


app.use(bodyParser.json());//will pass json data and attatch it to request

//initialise routes
app.use('/api',routes); //uses routes -- so that you didnt have to put api down each time

// error handeling middleware
app.use(function(err,req,res,next){
  //console.log(err);
  res.status(422).send({error:err.message}); // error just a variable  message just a proprty on error
});
// 422 status shows something is wrong

//listen for request
app.listen(4000,function(){
  console.log("now listening to port 4000");
});
