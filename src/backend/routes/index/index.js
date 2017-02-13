const express = require('express');
const router = express.Router();
router.use('/*', (req, res, next) => {

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Expires");

    if ('OPTIONS' === req.method.toUpperCase()) {
        res.status(200).end();
    } else {
        next();
    }
});
router.use('/api/articles', require('../articles/index'));


module.exports = router;