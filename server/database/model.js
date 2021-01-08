// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/quiz", { useNewUrlParser: true });
// mongoose.connect(process.env.MONGO_URL);
const DB = require("./index");
const Schema = mongoose.Schema;

const Model = new Schema({
  username: String,
  password: String,
  score: Number,
});
let User = mongoose("User", Model);
module.exports = User;
