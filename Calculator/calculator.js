
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function (req,res) {

    res.sendFile(__dirname+"/index.html");
    
});

app.post("/",function (req,res) {

    var n1=Number(req.body.firstnumber);
    var n2=Number(req.body.secondnumber);
    res.send("Sum is "+(n1+n2));
    
});

app.listen(3001,function () {
    console.log("Calci started!");
    
});


