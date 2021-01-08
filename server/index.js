const express = require("express");
const app = express();
// const $ = require("jquery");
const cors = require("cors");
const db = require("./database");
const apiPort = 8000;
const axios = require("axios");
const dbHelper = require("./database/index");
const mod = require("./database/model");
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.post("/", (req, res) => {
  console.log("request is ", req.body);
  mod
    .duc({ username: req.body.username, email: req.body.email })
    .then((bol) => {
      if (!bol) {
        let newu = req.body;
        mod.User.insertMany(newu);
      }
      res.send();
    });
});

app.get("/", (req, res) => {
  axios
    .get("https://opentdb.com/api.php?amount=10&type=multiple")
    .then((response) => {
      console.log(response.data.results);
      let arr = response.data.results.map((ele) => {
        return {
          text: red(ele.question),
          correct: red(ele.correct_answer),
          op: ele.incorrect_answers.map((elm) => {
            return red(elm);
          }),
          ks: "ks",
        };
      });
      // console.log("Schema db", arr);
      dbHelper
        .saveQuestions(arr)
        .then(() => res.status(200).send("success saved"))
        .catch((err) => console.log("error saving", err));

      // console.log("here are your questions", arr);
      // res.send();
    })
    .catch((error) => {
      console.log("request problem", error);
    });
});
app.get("/quiz", (req, res) => {
  dbHelper.retrieve().then((response) => {
    console.log("here is the get request  from the db", response);
    res.send();
  });
});
app.delete("/quiz", (req, res) => {
  dbHelper.del().then(() => {
    res.send();
  });
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

////////////////////////////////////////////////
function red(str, n = 0) {
  if (n == str.length) {
    return str;
  } else {
    let k = match(str, "&");
    if (!(k == str.length - 1)) {
      str = str.substr(0, k) + " " + str.substr(k + 6);
      return red(str);
    } else {
      return red(str, n + 1);
    }
  }
}
function match(str, c, n = 0) {
  if (n == str.length - 1 || str[n] == c) {
    return n;
  } else {
    return match(str, c, n + 1);
  }
}
