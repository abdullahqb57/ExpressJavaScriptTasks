const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const dbconnect = require('./DBConnect');
const user = require('./models/user');
// var bcrypt1 = dcodeIO.bcrypt;

app.use(express.static(__dirname + '/'));
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.get('/',(req,res,next) => {
    res.sendFile(__dirname + '/');
});
app.post('/',(req,res,next) => {
    var User = new user();
    //bcrypt using sync
    User.email = req.body.email;
    var saltRounds = 10;
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync("req.body.passsword", salt);
    User.password = hash;

    User.save(function(err){
        if (err) throw err;
        else res.send(`database sent successfully`);
    })
})

app.listen(port,(err) => {
    if(err) return err;
    else console.log(`connected to port ${port}`)
})




    //bcrypt using sync
// var User = new user();
//     User.email = req.body.email;
//     var saltRounds = 10;
//     var salt = bcrypt.genSaltSync(saltRounds);
//     var hash = bcrypt.hashSync("req.body.passsword", salt);
//     User.password = hash;



//bcrypt function callback
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
        user.password= hash;
        user.email= req.body.email;

        user.save(function(err){
            if(err){
                throw err;
            }
            else{
                res.send("Data send to database");
            }
        });


    });
});
//bcrypt promises
bcrypt.hash(req.body.password, 10).then(function(hash) {
  
    user.password= hash;
    user.email= req.body.email;

    user.save(function(err){
        if(err){
            throw err;
        }
        else{
            res.send("Data send to database");
        }
    });

//bcrypt aync await

app.post("/",async(req,res,next)=>{
var user= new Users();

const saltRounds = 10;
const salt=await bcrypt.genSalt(10);

user.email= req.body.email;

user.password=await bcrypt.hash(req.body.password,salt)

await user.save()
res.send("Thats all")

});