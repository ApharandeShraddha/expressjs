var express = require("express");

var app = express();

var bodyParser = require("body-parser");

//body parser added
app.use(bodyParser.urlencoded({extended :true}));

var friends =["Shraddha","Prashant","Pooja","Prajkta"];

//all view files are ejs
app.set("view engine","ejs");

//routes

app.get("/",function(req,res){
    
    res.render("home");
    
});


app.post("/addFriends",function(req,res){
     var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
    
    
});

app.get("/friends",function(req,res){
    
   
    res.render("friends",{ friends : friends });
    
});


//listen on port
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});