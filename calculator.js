const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(request,response)
{
  response.sendfile(__dirname+"/index.html");
  //console.log(request);
});
app.post("/",function(request,response)
{
   var num1=Number(request.body.num1);
   var num2=Number(request.body.num2);
   var result=num1+num2;
  response.send("THE RESULT IS : "+result);
  //console.log(request);
});


// THIS IS FOR BMI
app.get("/bmicalculator",function(request,response)
{
  response.sendfile(__dirname+"/bmicalculator.html");
  //console.log(request);
});
app.post("/bmicalculator",function(request,response)
{
   var height=parseFloat(request.body.height);
   var weight=parseFloat(request.body.weight);
   var result2=weight/(height*height);
  response.send("YOUR BMI IS : "+result2);
  //console.log(request);
});
app.listen(3000,function(){console.log("Server started on port 3000")});
