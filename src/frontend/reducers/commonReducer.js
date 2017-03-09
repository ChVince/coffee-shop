import {
    GET_PARTNERS_LOGO_REQUEST,
    GET_PARTNERS_LOGO_SUCCESS
} from '../constants/asyncActionTypes'
import {CHANGE_LANGUAGE} from '../constants/syncActionTypes'
import cookie from '../utils/cookie'


const initialState = {
    partnersLogo: [],
    currentLang: cookie.getCookie('lang') || 'ru'
};


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PARTNERS_LOGO_REQUEST: {
            return {...state}
        }
        case GET_PARTNERS_LOGO_SUCCESS: {
            return {...state, partnersLogo: action.payload}
        }
        case CHANGE_LANGUAGE: {
            return {...state}
        }

        default:
            return state;
    }
}
