const mongoose = require("mongoose");

module.exports = mongoose.connect("mongodb://abdullah:github%40123@ds121999.mlab.com:21999/devconnect",{ useNewUrlParser: true },(err)=>{
    if(err) throw err;
    else console.log("DB connected")
})