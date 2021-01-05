const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./database');
const dbHelpers = require('./database/model')
const apiPort = 8000

app.use(express.static(__dirname + '../client/public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/user/score', function(req, res) {
    console.log('req.body',req.body)
    dbHelpers.saveScore(req.body.score)
    .then(dbRes => {
    console.log('DB response: ', dbRes)
    res.status(200).send(dbRes)
    })
    .catch(dbError => {
    console.log('Error from DB: ', dbError)
    res.status(404).send(dbError)
    })
});


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))