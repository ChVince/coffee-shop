
const express = require ('express');
const routes = require('./common-routes');
const router  = express.Router();



router.route('/partnersLogo')
    .get(routes.getPartnersLogo.bind(routes));


module.exports = router;
