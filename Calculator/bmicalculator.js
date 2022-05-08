
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function (req,res) {

    res.sendFile(__dirname+"/bmiCalculator.html");
    
});

app.post("/bmicalculator.js",function (req,res) {

    var w=parseFloat(req.body.weight);
    var h=parseFloat(req.body.height);
    res.send("BMI is "+(w/(h*h)));
    
});

app.listen(3002,function () {
    console.log("Calci started!");
    
});
