
const express = require ('express');
const routes = require('./clip-list-routes');
const router  = express.Router();

router.route('/')
    .get(routes.getClipList.bind(routes));


module.exports = router;