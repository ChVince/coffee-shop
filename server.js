const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('./webpack.config');
const connect = require('./src/backend/common/db-connect');
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./src/backend/routes/index'));
connect();


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});



app.use(function (req, res, next) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
});

app.listen(3000, function (err) {
    if (err) {
        return console.error(err);
    }

    console.log('Listening at http://localhost:3000/');
});
