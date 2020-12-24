// jshint esversion:6

const express = require("express");
// bodyparser parse the request. 
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000,function(){
    console.log("Server is running at port 3000.");

});

app.get('/',function(request,response){
   
    response.sendFile(__dirname + "/index.html");
});

app.post('/', function (request, response) {
    // console.log(request.body);
    var a = Number(request.body.num1) ;
    var b = Number(request.body.num2) ;
    var result = a + b;

    response.send("The calculated value is :"+ result);
});

app.get('/bmicalculator',function(request,response){
   
    response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', function (request, response) {
    console.log(request.body);
    var wt = Number(request.body.wt) ;
    var ht = Number(request.body.ht) ;
    var resultbmi = wt / (ht*ht);

    response.send("Your BMI is :"+ resultbmi);
});