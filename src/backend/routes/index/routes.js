class Routes {

    response(res) {
        let statusCode = 200;
        return entity => {
            statusCode = entity.statusCode || statusCode;
            entity = entity || {};
            res.status(statusCode).send({entity});
        }
    }
}

module.exports = Routes;