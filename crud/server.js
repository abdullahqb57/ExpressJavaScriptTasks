const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const DB = require('./DBconnect');
const Admin = require("./Router/Admin");
const AdminModel = require('./Models/Admin');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use('/',Admin);
app.get('/Admin/Contact',function(req, res, next){
    AdminModel.find({}, (err, data) => {
        if (err){
            throw err;
        }else {
            res.sendFile(__dirfile + '/View/index.html');
        }
    });
});
//


app.listen(port, function(err){
    if(err) throw err;
    console.log('Up and Running : 3000');
})