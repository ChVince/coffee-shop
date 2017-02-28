import {
    ADD_CLIP_FAILURE,
    CHANGE_PRESENTATION_CLIP_FAILURE,
    GET_CLIP_LIST_NUM_FAILURE,
    GET_CLIP_LIST_FAILURE,
    GET_PARTNERS_LOGO_FAILURE,
    GET_PRESENTATION_CLIP_FAILURE,
    REMOVE_CLIP_FAILURE,
    ADD_CLIP_SUCCESS
} from '../constants/asyncActionTypes'


const initialState = {
    notification: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CLIP_LIST_FAILURE:
        case ADD_CLIP_FAILURE:
        case GET_PRESENTATION_CLIP_FAILURE:
        case GET_CLIP_LIST_NUM_FAILURE:
        case GET_PARTNERS_LOGO_FAILURE:
        case CHANGE_PRESENTATION_CLIP_FAILURE:
        case REMOVE_CLIP_FAILURE:
        case ADD_CLIP_SUCCESS: {
            return {...state, notification: action.payload}
        }

        default:
            return initialState
    }
}
