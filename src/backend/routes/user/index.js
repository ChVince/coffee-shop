const express = require('express');
const routes = require('./user-routes');
const router = express.Router();


router.route('/login')
    .post(routes.login.bind(routes));

router.route('/logout')
    .get(routes.logout.bind(routes));


module.exports = router;