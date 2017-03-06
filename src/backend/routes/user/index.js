const express = require('express');
const routes = require('./user-routes');
const router = express.Router();


router.route('/login')
    .post(routes.login.bind(routes));


module.exports = router;