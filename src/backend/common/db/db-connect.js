const mongoose = require('mongoose');
const articleModule = require('./../../models/Article');
const articleTestData = require('./articles-test-data.json');
const opts = require('../../options/dbOptions');


const mongo = {
    development: {
        connectionString: 'mongodb://localhost:27017/coffeeShop'
    },
    production: {
        connectionString: 'mongodb://localhost:27017/coffeeShop'
    }
};

module.exports = function connection() {
    const db = mongoose.connection;
    let connect;
    switch (process.env.NODE_ENV) {
        default:
            connect = mongoose.connect(mongo.development.connectionString, opts);
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function () {
                fillDbIfEmpty();
            });
            break;
        case 'production':
            connect = mongoose.connect(mongo.production.connectionString, opts);
            break;
    }
};

function fillDbIfEmpty() {
    _fillArticleCollection();
}

function _fillArticleCollection() {
    articleModule.Article.find(function (err, articles) {
        if (err) {
            return console.error(err);
        }
        if (articles.length) {
            return;
        }
        articleTestData.forEach((item) => {
            item.date = Date.now();
            new articleModule.Article(item).save();
        });
    });
}


/*function _fillUserCollection() {
    User.find(function (err, users) {
        if (err) {
            return console.error(err);
        }
        if (users.length) {
            return;
        }
        userTestData.forEach((item) => {
            item.date = Date.now();
            new User(item).save();
        });
    });
}*/
