const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Admin = new Schema({
    name: { type: String},
    email: {type: String},
    message: {type: String}
});

module.exports = mongoose.model('AdminModel',Admin);