const express = require("express");
const bodyParser = require("body-parser");

const app = express(); 
var items=[];
var work=[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  var t=new Date();
  var options = { weekday: 'long', month: 'long', day: 'numeric' };
  var day=t.toLocaleDateString("en-US",options);
res.render("list",{kd: day , nli : items});

});


app.post("/",function(req,res){
  var val=req.body.newitem;
  items.push(val);
   res.redirect("/");
});

app.get("/work",function(req,res){
  res.render("list",{kd:"WorkList", nli:work});
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
