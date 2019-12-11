const mongoose  = require("mongoose");
const Schema = mongoose.Schema;


// create ninja Schema
const NinjaSchema = new Schema({
  name:{
    type:String,
    required:[true,"Name field is required"]
  },
  rank:{
    type:String
  },
  available:{
    type:Boolean,
    default:false
  }
  // add in geo location
});

const Ninja = mongoose.model("ninja",NinjaSchema) // our model to be structured on ninja Schema

module.exports = Ninja;
