class Routes {

    response(res, statusCode) {
        statusCode = statusCode || 200;
        return entity => {
            entity = entity || {};
            res.status(statusCode).send({entity});
        }
    }
}

module.exports = Routes;