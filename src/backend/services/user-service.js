const Admin = require('../models/Admin');
const Result = require('../common/response');
const messages = require('../i18n/system.json');
const commonService = require('../services/common-service');
const {BAD_REQUEST} = require('../errors/error-codes');


class UserService {
    checkLoginForm(login, password) {
        return new Promise((resolve, reject) => {
            this._checkLoginField('login', login, {resolve: resolve, reject: reject});
        }).then(() => {
            return new Promise((resolve, reject) => {
                this._checkLoginField('password', password, {resolve: resolve, reject: reject});
            })
        })
    }


    _checkLoginField(fieldName, field, promiseEntity) {
        Admin.findOne({[fieldName]: field}, (err, foundedFiledValue) => {
            if (err || !foundedFiledValue) {
                let {message, statusCode}  = commonService.checkErrorType(messages.userService.error.incorrectLoginOrPassword);
                let result = new Result(message, statusCode);
                promiseEntity.reject(result);
            } else {
                let result = new Result();
                promiseEntity.resolve(result);
            }
        })
    }


}


module.exports = new UserService();
