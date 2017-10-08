var express = require("express");

var app = express();

// routes

app.get("/",function(req,rep){
    
    rep.send("Welcome!");
});


app.get("/bye",function(req,rep){
    
    rep.send("GoodBye!");
});

//listen on port
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});