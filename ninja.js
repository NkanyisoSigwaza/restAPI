const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create ninja schema and model

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
// add in geo lacation later
});

const Ninja = mongoose.model("ninja",NinjaSchema); //mongoose will pluraize this for us and create ninjas collection

module.exports = Ninja;
