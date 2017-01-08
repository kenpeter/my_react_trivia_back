// mongoose
var mongoose = require('mongoose');

// post because it is global
var CatQuestionSchema = new mongoose.Schema({
  name: {type: String, required: true},
  
  questions: [{
    points: {type: String, required: true},
    question: {type: String, required: true},
    answer: {type: String, required: true},
  }]
});

// here we map to whatever in db
module.exports = mongoose.model("my_react_trivia_back_cat_question", CatQuestionSchema);
