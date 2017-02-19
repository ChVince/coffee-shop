const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clipSchema = new Schema({
    section: String,
    isPresentation: Boolean,
    title: String,
    url: String,
    date: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Clip', clipSchema);
