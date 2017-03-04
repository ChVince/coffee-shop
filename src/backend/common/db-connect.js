const mongoose = require('mongoose');
const Clip = require('./../models/Clip');
const Admin = require('./../models/Admin');
const videoTestData = require('./json/clipList.json');
const adminTestData = require('./json/test-admin.json');
const opts = require('dbOptions');


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
    _fillVideoCollection();
    _fillAdminTest();
}


function _fillAdminTest() {
    Admin.find(function (err, admin) {
        if (err) {
            return console.error(err);
        }
        if (admin.length > 0) {
            return;
        }
        new Admin(adminTestData).save();
    });
}

function _fillVideoCollection() {
    Clip.find(function (err, clipList) {
        if (err) {
            return console.error(err);
        }
        if (clipList.length) {
            return;
        }
        videoTestData.forEach((item) => {
            item.date = Date.now();
            new Clip(item).save();
        });
    });
}


