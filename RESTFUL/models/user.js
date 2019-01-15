const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : {
        type: String
    },
    email: {
        type: String
    }
});
//modelname  schemaname collection name...
module.exports = mongoose.model('user', userSchema, 'alis')