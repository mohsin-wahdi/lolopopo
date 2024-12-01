//  download the mongodb
//  install mongoose
// require and setup connection
//  make schema
//  create model and export

// require the db
const mongoose = require("mongoose");

// connection the db
mongoose.connect("mongodb://127.0.0.1:27017/practicekaro"); //  practicekaro is any data name to create the name in database

// make schema  document ka data kaisa hoga
const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
});

// collection user jo hai collection ka name hai data types name(like user,sell,products)
module.exports = mongoose.model("user", userschema);
