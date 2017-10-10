var express = require("express");

var app = express();

var request =require("request");

app.set("view engine","ejs");

app.get("/",function(req ,res){
    res.render("search");
    
});

//get information of movies
app.get("/results",function(req,res){
     console.log(req.query.search[1]);
    var movieName =req.query.search[0];
    var year =req.query.search[1];
    var url="http://www.omdbapi.com/?s="+movieName+"&y="+year+"&plot=full&apikey=thewdb";
    
     request(url,function(error, response, body){
          if (!error && response.statusCode == 200) {
              var data = JSON.parse(body);
              console.log(data);
               res.render("results" , {data:data});   
              
             } 
         
     });
});


//listen on port
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has been started!!!");
});