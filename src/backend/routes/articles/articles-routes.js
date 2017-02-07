
const Routes = require('../index/routes');
const articleService = require('../../services/article-service');

class ArticlesRoutes extends Routes {

    getArticles(req, res, next) {
        const { page } = req.params;
        articleService.getList(page)
            .then(this.response(res))
            .catch(this.response(res));
    }

    getArticlesPageNum(req, res, next) {
        articleService.getPageNumArticles()
            .then(this.response(res))
            .catch(this.response(res))
    }
}

module.exports = new ArticlesRoutes();