import {VALIDATION_FORM_FAILURE} from '../constants/syncActionTypes'
import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from '../constants/asyncActionTypes'


const initialState = {
    validate: {
        login: {
            err: false,
            msg: ''
        },
        password: {
            err: false,
            msg: ''
        },
        incorrect: {
            err: false,
            msg: ''
        }
    },
    isAuthenticated:false
};


export default function (state = initialState, action) {

    switch (action.type) {
        case VALIDATION_FORM_FAILURE:
            let incomingValidateObj = action.payload;
            let newValidate = {
                ...initialState.validate,
                password: incomingValidateObj.password,
                login: incomingValidateObj.login
            };

            return {...state, validate: newValidate};


        case LOGIN_FAILURE: {
            return {...state, validate: action.payload,isAuthenticated: false}
        }
        case LOGIN_SUCCESS:{
            return {...state, isAuthenticated: true}
        }
        case LOGIN_REQUEST: {
            return {...state}
        }

        default:
            return state
    }


}