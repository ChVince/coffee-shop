import {VALIDATION_FORM_FAILURE} from '../constants/syncActionTypes'
import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from '../constants/asyncActionTypes'
import {LOGIN_URL} from '../constants/URLs'

import cookie from '../utils/cookie'
import axios from 'axios'


function _validateInputLoginForm(login, password,strings) {
    let newValidate = {
        login: {},
        password: {}
    };

    if (login.length == 0) {
        newValidate.login.err = true;
        newValidate.login.msg = strings.err.emptyLogin
    }

    if (password.length == 0) {
        newValidate.password.err = true;
        newValidate.password.msg = strings.err.emptyPassword
    }
    return newValidate;
}


export function login(login, password,strings) {
    let newValidate = _validateInputLoginForm(login, password,strings);

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
