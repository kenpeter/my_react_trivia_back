require("../database");

var CatQuestion = require('../models/CatQuestion');

// clean up
CatQuestion.remove({}, function(err) {
  if (err) {
    console.log(err)
  } 
  else 
  {
    console.log("CatQuestion empty" );
    
    // soft
    var catQuestion = new CatQuestion({
      name: "Soft",
      
      questions: [{
        points: "100",
        question: "Who is this?",
        answer: "Azusa Nagasawa",
        img_name: "azusa-nagasawa.jpg"
      }, {
        points: "200",
        question: "Who is this?",
        answer: "Maria Ozawa",
        img_name: "maria-ozawa.jpg"
      }, {
        points: "300",
        question: "Who is this?",
        answer: "Suzuna Komiya",
        img_name: "suzuna-komiya.jpg",
      }]
    });

    // save 
    catQuestion.save(function(error) {
      if (!error) {
        // Post find all, need class
        CatQuestion.find({})
        .exec(function(error, catQuestions) {
          console.log(JSON.stringify(catQuestions, null, "\t"))
        })
      } else {
      
      }
    });
    
    
    // Hard
    var catQuestion = new CatQuestion({
      name: "Hard",
      
      questions: [{
        points: "100",
        question: "Who is this?",
        answer: "Honami Uehara",
        img_name: "honami-uehara.jpg"
      }, {
        points: "200",
        question: "Who is this?",
        answer: "Mei Ashikawa",
        img_name: "mei-ashikawa.jpg"
      }, {
        points: "300",
        question: "Who is this?",
        answer: "Rika Aina",
        img_name: "rika-aina.jpg",
      }]
    });

    // save 
    catQuestion.save(function(error) {
      if (!error) {
        // Post find all, need class
        CatQuestion.find({})
        .exec(function(error, catQuestions) {
          console.log(JSON.stringify(catQuestions, null, "\t"))
        })
      } else {
      
      }
    });
    
    
    // Extreme
    var catQuestion = new CatQuestion({
      name: "Extreme",
      
      questions: [{
        points: "100",
        question: "Who is this?",
        answer: "Rina Mayuzumi",
        img_name: "rina-mayuzumi.jpg"
      }, {
        points: "200",
        question: "Who is this?",
        answer: "Ririsu Ayaka",
        img_name: "ririsu-ayaka.jpg"
      }, {
        points: "300",
        question: "Who is this?",
        answer: "Saki Sudou",
        img_name: "saki-sudou.jpg",
      }]
    });

    // save 
    catQuestion.save(function(error) {
      if (!error) {
        // Post find all, need class
        CatQuestion.find({})
        .exec(function(error, catQuestions) {
          console.log(JSON.stringify(catQuestions, null, "\t"))
        })
      } else {
      
      }
    });
  }
  
});


