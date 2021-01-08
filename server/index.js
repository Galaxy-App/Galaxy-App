const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path')
const cors = require("cors");
const db = require("./database");
const apiPort =  process.env.PORT || 8000;;
const axios = require("axios");
const dbHelper = require("./database/index");


app.use(express.static(path.join(__dirname , '../client/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(cors());
// app.use(bodyParser.json());
app.get("/home", (req, res) => {
  axios
    .get("https://opentdb.com/api.php?amount=10&type=multiple")
    .then((response) => {
      console.log(response.data.results);
      let arr = response.data.results.map((ele) => {
        return {
          text: ele.question,
          correct: ele.correct_answer,
          op: ele.incorrect_answers,
        };
      });
      // console.log('map array is',arr)

      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        element.op.push(element.correct)
      }

      // console.log("arrray",arr)
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
    res.send(response);
  });
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
