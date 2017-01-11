// a serial of connect actions
require("./database");

var express = require('express');
var bodyParser= require('body-parser');
var app = express();

// user
var CatQuestion = require('./models/CatQuestion');

// http://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// extract form data then add to the body of request
app.use(bodyParser.urlencoded({extended: true}));

//
app.set('view engine', 'ejs');


// http://mongoosejs.com/docs/queries.html
app.get('/cat_question.json', (req, res) => {
  CatQuestion.find({}, function(err, catQuestions){
    res.json(catQuestions);
  });
});


app.get('/', (req, res) => {
  res.json({success: true});
});

// listen to 8004
var port = 8004;
app.listen(port, function(){
	console.log("Listent to port: " + port);
});

