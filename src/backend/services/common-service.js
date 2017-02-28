const Result = require('./../common/response');
const messages = require('../i18n/system.json');
const partnersLogo = require('../common/fsStore/partners-logo.json');
const mongoose = require('mongoose');
const {INTERNAL_SERVER_ERROR} = require('../errors/error-codes');

class CommonService {
    getPartnersLogos() {
        return new Promise((resolve, reject) => {
            if (partnersLogo) {
                let result = new Result(messages.stateResponse.SUCCESS_STATE, partnersLogo);
                resolve(result)
            } else {
                let result = new Result(messages.stateResponse.FAIL_STATE);
                reject(result)
            }
        });
    }

    _isDbConnect(reject) {
        if (mongoose.connection.readyState == 0) {
            let result = new Result(messages.stateResponse.FAIL_STATE, 'Internal server error', INTERNAL_SERVER_ERROR);
            reject(result);
        }
    }
}


module.exports = new CommonService();