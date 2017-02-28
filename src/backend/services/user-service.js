const Admin = require('../models/Admin');
const Result = require('../common/response');
const message = require('../i18n/system.json');
const {BAD_REQUEST} = require('../errors/error-codes');


class UserService {
    checkLoginForm(login, password) {
        return new Promise((resolve, reject) => {
            this._checkLoginField('login', login, resolve, reject);
        }).then(() => {
            return new Promise((resolve, reject) => {
                this._checkLoginField('password', password, resolve, reject);
            })
        })
    }


    _checkLoginField(fieldName, field, resolve, reject) {
        Admin.findOne({[fieldName]: field}, (err, foundedFiledValue) => {
            if (err || !foundedFiledValue) {
                let result = new Result(message.stateResponse.FAIL_STATE, 'Incorrect login or password', BAD_REQUEST);
                reject(result);
            } else {
                let result = new Result(message.stateResponse.SUCCESS_STATE);
                resolve(result);
            }
        })
    }

}


module.exports = new UserService();
