const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/galaxy';

const db = mongoose.connect(mongoUri);

module.exports = db;