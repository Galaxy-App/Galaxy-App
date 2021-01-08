
const mongoose = require("mongoose");


// mongoose.connect("mongodb://localhost:27017/quiz", { useNewUrlParser: true });
// mongoose.connect(process.env.MONGO_URL);
const DB = require("./index");
const Schema = mongoose.Schema;

const Model = new Schema({
  username: String,

  email: String,
  score: Number,
});
let User = mongoose.model("User", Model);
let duc = (username) => {
  return User.exists(username);
};
module.exports.User = User;
module.exports.duc = duc;

