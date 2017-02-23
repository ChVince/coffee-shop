const Result = require('./../common/response');
const messages = require('../i18n/system.json');
const partnersLogo = require('../common/fsStore/partners-logo.json');


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
}


module.exports = new CommonService();