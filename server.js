const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;


var db;

// mongo client
// client
// 
MongoClient.connect('mongodb://my-crud-express-mongodb:my-crud-express-mongodb@ds157298.mlab.com:57298/my-crud-express-mongodb', (err, database) => {
  if (err) {
    console.log("---- my error ----");
    return console.log(err);
  }  
    
  db = database;
  
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
  
});


// extract form data then add to the body of request
app.use(bodyParser.urlencoded({extended: true}));

//
app.set('view engine', 'ejs');

// post quotes
// req, res
app.post('/quotes', (req, res) => {
  // db collection
  // quotes
  // save
  // req.body
  db.collection('quotes').save(req.body, (err, result) => {
    // error 
    if (err) return console.log(err)

    // save db
    console.log('saved to database');
    
    // redirect
    res.redirect('/');
  });
});


// app get /
// req res
app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})
