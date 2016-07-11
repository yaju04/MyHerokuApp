var express        = require("express");
var bodyParser     = require("body-parser");
var moment =require("moment-timezone");


var app  = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port',process.env.PORT||5000)

app.get('/', function(req, res){
  
  res.render('index.ejs');
  
});

app.listen(app.get('port'),function(){
  console.log("Started on PORT 3000");
})