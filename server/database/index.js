const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/quiz", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;

db.once("open", () => {
  console.log("MongoDB is connected");
});

db.on("error", () => {
  console.log("Something went wrong in the Database");
});

let Q = mongoose.Schema({
  text: String,
  correct: String,
  op: Array,
});
let Quest = mongoose.model("Quest", Q);

let saveQuestions = (questions) => {
  return Quest.insertMany(questions);
};
let retrieve = () => {
  return Quest.find({})
  // .sort(() => 0.5 - Math.random()).slice(0, 10));
};
module.exports.saveQuestions = saveQuestions;
module.exports.retrieve = retrieve;
