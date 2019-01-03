const mongoose = require("mongoose")

module.exports = mongoose.connect('mongodb://localhost:27017/abu',{ useNewUrlParser: true } ,function(err){
   if(err){
       throw err;
   }
   console.log("Database connected");
});