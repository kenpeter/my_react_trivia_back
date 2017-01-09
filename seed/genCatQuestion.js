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
    
    //
    var catQuestion = new CatQuestion({
      name: "cat 1",
      
      questions: [{
        points: "100",
        question: "q 1",
        answer: "a 1"
      }, {
        points: "200",
        question: "q 2",
        answer: "a 2"
      }, {
        points: "300",
        question: "q 3",
        answer: "a 3"
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


