const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3020;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
let items = ["Buy food","cook food","eat food"];
let workItems= [];
app.get("/", (req, res) => {
  let today = new Date();


  //   var currentDay = today.getDay();
//   var day = "";
//   switch (currentDay) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;

//     default:
//       console.log("Error: current day is equal to" + currentDay);
//   }
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US",options);

  res.render("list", { listTitle: day  , newListItems : items});
});

app.post('/',(req,res)=>{
    let item = req.body.newItem;
    console.log(item, req.body)
    if(req.body.list === "Work"){
      console.log(req.body)
      workItems.push(item);
      res.redirect("/work");
    }else{
    items.push(item);
    res.redirect("/");
  }
})

app.get("/work",(req,res)=>{
  res.render("list",{listTitle: "Work List", newListItems: workItems })
})

app.listen(port, err => {
  if (err) throw err;
  else console.log(`server is running on ${port}`);
});


