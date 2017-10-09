var express = require("express");

var app = express();

// routes

app.get("/",function(req,rep){
    
    rep.send("Hi there , Welcome to my assignment!");
});


app.get("/speak/:animal",function(req,rep){
    var sound="";
    var sounds={
        pig : 'Oink',
        dog : 'woof woof',
        cow : 'Moo',
    }
     var animal = req.params.animal;
   if(animal === "pig"){
       sound = sounds[animal];
   }else if(animal == "cow"){
         sound = sounds[animal]; 
   }else if(animal == "dog"){
       sound = sounds[animal]; 
   }
    rep.send("The "+animal+" says "+ sound); 
   
});

app.get("/repeat/:word/:count",function(req,rep){
    var str="";
    var word = req.params.word;
    var count =Number(req.params.count);
    for (var i = 0; i < count ;i++ ) {
      str=str+" "+ word;
    }
    rep.send(str);
});


app.get("*",function(req,rep){
    
    rep.send("Sorry page not found!");
});

//listen on port
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});