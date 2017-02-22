const Routes = require('../index/routes');
const clipService = require('../../services/clip-service');

class ClipListRoutes extends Routes {

    getClipList(req, res, next) {
        const {tag} = req.params;
        const {page} = req.params;
        const {limit}  = req.query;
        clipService.getClipListByTag(tag, page,limit)
            .then(this.response(res))
            .catch(this.response(res));
    }

    getClipListPageNumByTag(req, res, next) {
        const {tag} = req.params ;
        const {limit} = req.query ;
        clipService.getClipListPageNumByTag(tag,limit)
            .then(this.response(res))
            .catch(this.response(res));
    }


}

module.exports = new ClipListRoutes();
