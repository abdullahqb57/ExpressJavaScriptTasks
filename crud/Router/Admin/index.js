const express = require('express');
const Router = express.Router();
var path = require('path');

const AdminModel = require("../../Models/Admin");

Router.get('/Admin/Contact', function(req, res, next){
    AdminModel.find({}, function(err, data){
        if (err){
            throw err;
        } else {
            res.sendFile(path.resolve('View/index.html'));
        }
    })
})

Router.get('/Admin/Home', function(req, res, next){
   AdminModel.find({}, function(err,data){
    if(err){
        throw err;
    } else {
        res.json(data);
    }
});
   });
Router.post('/Admin/Contact', function(req, res, next){
       var admindata = new AdminModel();
       admindata.name = req.body.name;
       admindata.email = req.body.email;
       admindata.message = req.body.message;

       admindata.save(function(err, data){
           if(err) throw err;
           else res.json({Status: 'successful'});
       })
   });
module.exports = Router;