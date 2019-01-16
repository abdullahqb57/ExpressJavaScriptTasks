// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var expressValidator = require("express-validator")

const { check, validationResult } = require('express-validator/check');

const mongoose = require('mongoose');

var bodyParser = require('body-parser')
var User = require('./models/user');
var db = require('./DBConnect');



var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator())
// parse application/json
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


module.exports = app;