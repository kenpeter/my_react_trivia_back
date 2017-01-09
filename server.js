// a serial of connect actions
require("./database");

var express = require('express');
var bodyParser= require('body-parser');
var app = express();

// user
var CatQuestion = require('./models/CatQuestion');


// extract form data then add to the body of request
app.use(bodyParser.urlencoded({extended: true}));

//
app.set('view engine', 'ejs');



/*
// get first
app.get('/category', (req, res) => {
  db.collection('my_react_trivia_category').find().toArray((err, result) => {
    if (err) return console.log(err);
    // renders index.ejs
    res.render('category.ejs', {cats: result});
  });
});


// post 2nd
app.post('/post_category', (req, res) => {
  // db collection
  // quotes
  // save
  // req.body
  db.collection('my_react_trivia_category').save(req.body, (err, result) => {
    // error 
    if (err) return console.log(err);

    // save db
    console.log('saved to database');
    
    // redirect
    res.redirect('/category');
  });
});


// get first
app.get('/question', (req, res) => {
  
  db.collection('my_react_trivia_question').find().toArray((err, res_qs) => {
    // error
    if (err)
      return console.log(err);
    
    db.collection('my_react_trivia_category').find().toArray((err, res_cats) => {
      if (err)
        return console.log(err);

      
      //test
      //console.log(res_qs);
      //console.log(res_cats);
      

      res.render('question.ejs', {qs: res_qs, cats: res_cats});
    });
    
    
  });
});


// post 2nd
app.post('/post_question', (req, res) => {
  // db collection
  // quotes
  // save
  // req.body
  db.collection('my_react_trivia_question').save(req.body, (err, result) => {
    // error 
    if (err) return console.log(err)

    // save db
    console.log('saved to database');
    
    // redirect
    res.redirect('/question');
  });
});


// https://expressjs.com/en/api.html#res.json
app.get('/cat_q.json', (req, res) => {
  res.json({ user: 'tobi' });
});

// app get /
// req res
app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  });
});
*/


