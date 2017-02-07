const  mongoose  = require ('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    text: String,
    annotation: String,
    imgURL: String,
    date: {type: Date, default: Date.now()},
    likes: Number
});

module.exports.schema = articleSchema;
module.exports.Article = mongoose.model('Article', articleSchema);
