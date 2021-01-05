const mongoose = require('mongoose');
const db = require('./index.js');
const Schema = mongoose.Schema

const ModelSchema = new Schema({
    userName:String,
    score:Number
}

)
const Model = mongoose.model('Model', ModelSchema );

let saveScore = (score) => {
    return Model.save(score)
};

module.exports.saveScore = saveScore