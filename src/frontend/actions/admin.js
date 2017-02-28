import {VALIDATION_FORM_FAILURE, VALIDATION_FORM_SUCCESS} from '../constants/syncActionTypes'
import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from '../constants/asyncActionTypes'
import {LOGIN_URL} from '../constants/URLs'

import cookie from '../utils/cookie'
import axios from 'axios'


function _validateInputLoginForm(login, password) {
    let newValidate = {
        login: {},
        password: {}
    };

    if (login.length == 0) {
        newValidate.login.err = true;
        newValidate.login.msg = 'Введите логин'
    }

    if (password.length == 0) {
        newValidate.password.err = true;
        newValidate.password.msg = 'Введите пароль'
    }
    return newValidate;
}


export function login(login, password) {
    let newValidate = _validateInputLoginForm(login, password);

    if (newValidate.login.err || newValidate.password.err) {
        return {
            type: VALIDATION_FORM_FAILURE,
            payload: newValidate
        }
    } else {
        return (dispatch) => {
            dispatch({
                type: LOGIN_REQUEST
            });
            axios.post(LOGIN_URL, {
                login: login,
                password: password
            }).then(response => {

                cookie.setCookie('adminData',{login:login,password:password});
                dispatch({
                    type: LOGIN_SUCCESS
                })
            }).catch(err => {
                let response = err.response;
                newValidate.incorrect = {
                    err: true,
                    msg: response.data.entity.body
                }

                dispatch({
                    type: LOGIN_FAILURE,
                    payload: newValidate
                })
            })
        }
    }
}
