const express = require("express");

// set up express app

const app = express();

const routes = require("./routes/api");


app.use("/api",routes); // will use all the routes we specified
// listen for requests
app.listen(4000,function(){
  console.log("Now Lstening to port 4000");
});
