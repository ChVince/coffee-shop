const Routes = require('../index/routes');
const clipService = require('../../services/clip-service');

class ClipRoutes extends Routes {
    addClip(req, res, next) {
        const {clip} = req.body;
        clipService.addClip(clip)
            .then(this.response(res))
            .catch(this.response(res));
    }

    removeClip(req, res, next) {
        const {id} = req.params;
        clipService.removeClip(id)
            .then(this.response(res))
            .catch(this.response(res));
    }

    changePresentationClip(req,res,next){
        const {id} = req.body;
        clipService.changePresentationClip(id)
            .then(this.response(res))
            .catch(this.response(res));
    }

    getPresentationClip(req,res,next){
        clipService.getPresentationClip()
            .then(this.response(res))
            .catch(this.response(res));
    }
}

module.exports = new ClipRoutes();

