const commonService = require('../../services/common-service');
const Routes = require('../index/routes');

class CommonRoutes extends Routes {
    getPartnersLogo(req, res, next) {
        commonService.getPartnersLogos()
            .then(this.response(res))
            .catch((this.response(res)))
    }
}


module.exports = new CommonRoutes();
