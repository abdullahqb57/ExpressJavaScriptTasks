const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mySchema = new Schema({
    email : {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('User', mySchema , 'newProj')
