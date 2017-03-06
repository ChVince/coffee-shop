import * as actions from '../constants/asyncActionTypes'
import {
    PARTNERS_LOGO_URL
} from './../constants/URLs'
import axios from 'axios'




export function getPartnersLogo() {
    return (dispatch) => {
        dispatch({
            type: actions.GET_PARTNERS_LOGO_REQUEST
        });

        axios.get(PARTNERS_LOGO_URL)
            .then(response => {
                dispatch({
                    type: actions.GET_PARTNERS_LOGO_SUCCESS,
                    payload: response.data.entity.body
                })
            })
            .catch(error => {
                let response = error.response;
                dispatch({
                    type: actions.GET_PARTNERS_LOGO_FAILURE,
                    payload: response.data.entity
                })
            })
    }
}


