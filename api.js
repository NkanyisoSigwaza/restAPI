const express = require("express");

const router = express.Router();


// get a ninja in db
router.get("/ninjas",function(req,res){
  res.send({type:"GET"});
});

// adda ninja to db
router.post("/ninjas",function(req,res){
  //console.log(req.body);   // can use this because of bodyParser
  res.send({type:"POST",
            name:req.body.name,
            rank:req.body.rank});
});

// update a ninja in db
router.put("/ninjas/:id",function(req,res){
  res.send({type:"PUT"});
});

// delete a ninja from the db
router.delete("/ninjas/:id",function(req,res){
  res.send({type:"DELETE"});
});

module.exports = router;
