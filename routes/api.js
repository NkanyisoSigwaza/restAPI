const express = require("express");

const router = express.Router();  // think for api use the same as app

const Ninja = require("../models/ninja");
//get a list of ninjas to the db
router.get("/ninjas",function(req,res){
  res.send({type:"GET"});
});  // /api/ninjas

//add new ninja to db
router.post("/ninjas",function(req,res){
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja);  // once new ninja has been succesfully added to the database
  });

});  // /api/ninjas

//update ninja in db
router.put("/ninjas/:id",function(req,res){
  res.send({type:"put"});
});  // /api/ninjas

//delete a ninja from db
router.delete("/ninjas/:id",function(req,res){
  res.send({type:"DELETE"});
});  // /api/ninjas
