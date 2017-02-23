import {
    GET_PARTNERS_LOGO_FAILURE,
    GET_PARTNERS_LOGO_REQUEST,
    GET_PARTNERS_LOGO_SUCCESS
} from '../constants/asyncActionTypes'


const initialState = {
    partnersLogo: [],
    preloader: false
};


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PARTNERS_LOGO_REQUEST: {
            return {...state, preloader: true}
        }
        case GET_PARTNERS_LOGO_SUCCESS: {
            return {...state, partnersLogo: action.payload, preloader: false}
        }
        case GET_PARTNERS_LOGO_FAILURE:{
            return {...state, preloader:false}
        }
        default:
            return state;
    }
}
