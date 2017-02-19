const Routes = require('../index/routes');
const clipService = require('../../services/clip-service');

class ClipListRoutes extends Routes {

    getClipList(req, res, next) {

        clipService.getList()
            .then(this.response(res))
            .catch(this.response(res));
    }





}

module.exports = new ClipListRoutes();
