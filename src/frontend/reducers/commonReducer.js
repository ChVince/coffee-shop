import {
    GET_PARTNERS_LOGO_REQUEST,
    GET_PARTNERS_LOGO_SUCCESS
} from '../constants/asyncActionTypes'


const initialState = {
    partnersLogo: []
};


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PARTNERS_LOGO_REQUEST: {
            return {...state}
        }
        case GET_PARTNERS_LOGO_SUCCESS: {
            return {...state, partnersLogo: action.payload}
        }

        default:
            return state;
    }
}
