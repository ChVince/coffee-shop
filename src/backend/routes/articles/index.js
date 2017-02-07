const express = require ('express');
const routes = require('./articles-routes');
const router  = express.Router();

router.route('/getArticlesPageNum')
    .get(routes.getArticlesPageNum.bind(routes));


router.route('/:page')
    .get(routes.getArticles.bind(routes));


module.exports = router;