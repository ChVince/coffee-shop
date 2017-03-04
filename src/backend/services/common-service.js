const Result = require('./../common/response');
const messages = require('../i18n/system.json');
const partnersLogo = require('../common/json/partners-logo.json');
const mongoose = require('mongoose');
const {INTERNAL_SERVER_ERROR} = require('../errors/error-codes');

class CommonService {
    getPartnersLogos() {
        return new Promise((resolve, reject) => {
            if (partnersLogo) {
                let result = new Result(partnersLogo);
                resolve(result)
            } else {
                let result = new Result(messages.commonService.error.internalServerError,INTERNAL_SERVER_ERROR);
                reject(result)
            }
        });
    }

    isDbConnect(reject) {
        if (mongoose.connection.readyState == 0) {
            let result = new Result(messages.commonService.error.internalServerError, INTERNAL_SERVER_ERROR);
            reject(result);
        }
    }

    checkErrorType(badRequestDescription = message.commonService.error.badRequest){
        return err ? {
            message: messages.commonService.error.internalServerError,
            statusCode: INTERNAL_SERVER_ERROR
        } : {
            message: badRequestDescription,
            statusCode: BAD_REQUEST
        };
    }
}


module.exports = new CommonService();