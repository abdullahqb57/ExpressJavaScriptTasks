const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
const mongoose = require("mongoose");
const db = require("./DBconnect");
const usr = require("./models/user")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user/ali',(req, res, next) => {
    var user = new usr(req.body);
    // user.name = req.body.name;
    // user.email = req.body.email;
    console.log(user);

    user.save((err) => {
        if(err)    throw err;
        else res.send("data sent successful")
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`));