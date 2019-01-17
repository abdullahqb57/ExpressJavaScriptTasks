const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 
const request = require('request');
const port = 3007 || process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res,next) => {
    res.sendFile(__dirname + "/index.html")
})
app.post("/",(req,res,next)=>{
    var crypto = req.body.crypto;
    console.log(crypto);
    var fiat = req.body.fiat;
    console.log(fiat);
    var amount = req.body.amount;
    console.log(amount);

    var options = {
        url: "https://apiv2.bitcoinaverage.com/convert/global",
        method: "GET",
        qs: {
            from: crypto,
            to: fiat,
            amount: amount
        }
    }
    
    request(options,(error,response,body)=>{
    var data = JSON.parse(body);
    var price = data.price;
    console.log(price)
    var currentDate = data.time;
    res.write("<p>The current date is " + currentDate + "</p>");
    res.write('<h1> The current price' + crypto + " is " + price + fiat + '</h1>');
   
    res.send();
    })
})

app.listen(port,(err) => {
    if(err) console.log(err)
    else console.log(`successfully running on ${port}`);
})