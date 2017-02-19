const express = require ('express');
const router  = express.Router();
const routes = require('./clip-routes');


router.route('/presentationClip')
    .get(routes.getPresentationClip.bind(routes));

router.route('/:id')
    .delete(routes.removeClip.bind(routes));

router.route('/')
    .post(routes.addClip.bind(routes));

router.route('/presentationClip')
    .put(routes.changePresentationClip.bind(routes));

module.exports = router;