const express = require("express");



const router = express.Router();  // think for api use the same as app



const Ninja = require("../models/ninja");



//get a list of ninjas to the db

router.get("/ninjas",function(req,res,next){

/*  Ninja.find({}).then(function(ninja){
    res.send(ninja);
  });*/


    Ninja.aggregate([{
      $geoNear: {
        near: {
          'type': 'Point',
          'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        distanceField: "dist.calculated",
        maxDistance: 100000,
        spherical: true
      }
    }]).then((ninjas) => {
      res.send(ninjas);
    });


});  // /api/ninjas



//add new ninja to db

router.post("/ninjas",function(req,res,next){

  Ninja.create(req.body).then(function(ninja){

    res.send(ninja);  // once new ninja has been succesfully added to the database

  }).catch(next);   // for error handeling if ninja.create fails program will jump to next midle weae







});  // /api/ninjas



//update ninja in db

router.put("/ninjas/:id",function(req,res,next){

  Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(ninja){
    Ninja.findOne({_id:req.params.id}).then(function(ninja){    // returns updated ninja
      res.send(ninja);
    })
  });

  //res.send({type:"put"});

});  // /api/ninjas



//delete a ninja from db

router.delete("/ninjas/:id",function(req,res,next){



  Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){

    res.send(ninja); //pass id of object you want to delete at end of url

  });

  //res.send({type:"DELETE"});

});  // /api/ninjas





module.exports = router;  // exports to index so that we can use it
