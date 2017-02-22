
const express = require ('express');
const routes = require('./clip-list-routes');
const router  = express.Router();



router.route('/pageNum/:tag')
    .get(routes.getClipListPageNumByTag.bind(routes));


router.route('/:tag/:page')
    .get(routes.getClipList.bind(routes));


module.exports = router;