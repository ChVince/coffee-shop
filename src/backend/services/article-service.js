
const messages = require('../i18n/system.json');
const Result = require('./../common/response');
const Article = require('../models/Clip').Article;

class ArticleService {


    constructor() {
        this.perPage = 3;
    }

    getPageNumArticles() {
        return new Promise((resolve, reject) => {
            this._findAllArticles(resolve, reject)
        }).then(incomingResult => {
            const pageNum = Math.ceil(incomingResult.body.length / this.perPage);
            let result = new Result(messages.stateResponse.SUCCESS_STATE, {pageNum: pageNum});

            return result;
        })
    }
    getList(page) {
        page = page || 0;
        return new Promise((resolve, reject) => {
            this._findAllArticles(resolve, reject).sort({date: -1}).limit(this.perPage)
                .skip(this.perPage * page);
        });
    }

    _findAllArticles(resolve, reject) {
        return Article.find((err, articles) => {
            if (!err && articles.length) {
                let result = new Result(messages.stateResponse.SUCCESS_STATE, articles);
                resolve(result);
            } else {
                let result = new Result(messages.stateResponse.FAIL_STATE);
                reject(result);
            }
        });
    }

}


module.exports =  new ArticleService ();
