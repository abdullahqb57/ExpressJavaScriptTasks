const mongoose = require('mongoose');

connection = mongoose.connect("mongodb://localhost:27017/abu",{ useNewUrlParser: true }, (err) => {
    if(err) throw err;
    else console.log(`mongodb connected`)
})

module.exports = connection;