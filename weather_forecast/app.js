const express=require("express");
const https=require("https");
const bodyParser=require("body-parser")
const app=express();

app.use(bodyParser.urlencoded({extended: true}));




app.get('/',function (req,res) {
  res.sendFile(__dirname +'/index.html');

  

});
app.post('/',function (req,res){

      var citi=req.body.city;
      var url="https://api.openweathermap.org/data/2.5/weather?q="+citi+"&units=metric&appid=cb479837fb9d867ab5b853b93ac31330#"
      https.get(url,function (resp) {
      console.log(resp.statusCode); 
      resp.on("data",function (data) {
      const weatherdata=JSON.parse(data);
      var picture="http://openweathermap.org/img/wn/"+weatherdata.weather[0].icon+"@2x.png";
      var temp=weatherdata.main.temp;
      var weatherdesc=weatherdata.weather[0].description;
      res.write("<p>The weather is currently "+weatherdesc+" </p>");
      res.write("<h1>Temperature in "+citi+" is "+temp+"</h1>");
      res.write("<img src="+picture+">");
      res.send();
   });
});

});




app.listen('3000',function () {
   console.log("Server 3000 is on!"); 
});