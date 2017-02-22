const mongoose = require('mongoose');
const Clip = require('./../../models/Clip');
const videoTestData = require('./video.json');
const opts = require('../../options/dbOptions');


const mongo = {
    development: {
        connectionString: 'mongodb://127.0.0.1:27017/newRecord'
    },
    production: {
        connectionString: 'mongodb://127.0.0.1:27017/newRecord'
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
    Clip.find(function (err, clipList) {
        if (err) {
            return console.error(err);
        }
        if (clipList.length) {
            return;
        }
        videoTestData .forEach((item) => {
            item.date = Date.now();
            new Clip (item).save();
        });
    });
}


