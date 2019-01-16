var express = require('express');
var User = require('../models/user');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var router = express.Router();
const expressValidator = require("express-validator");
const { check, validationResult } = require('express-validator/check');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/register', function(req, res, next) {
  res.render('registration');
});

router.post('/register', upload.single("profileimage") , function(req, res, next) {
 
  var newusers = new User();
  newusers.name = req.body.name;
  newusers.username = req.body.username;
  newusers.email = req.body.email;
  newusers.password = req.body.password;
  
  if(req.file){
    newusers.profileimage = req.file.filename;
  }
  else{
    newusers.profileimage ="nofile.jpg";
  }

  req.checkBody("name","Name is Required").notEmpty();
  req.checkBody("email","Email is Required").notEmpty();
  req.checkBody("email","Please Enter valid email").isEmail();
  req.checkBody("username","User Name is Required").notEmpty();
  req.checkBody("password","Password is Required").notEmpty();
  req.checkBody("confirmpassword","Password must be same").equals(req.body.password);

  var errors = req.validationErrors();
  console.log(errors);
  // if(errors){
  //   res.render("registration",{errors : errors});
  // }

  newusers.save(function(err){
    if(err){
      throw err
    }
    else{
      res.send("Success");
    }
  })

});




module.exports = router;
