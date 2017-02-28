import * as actions from '../constants/asyncActionTypes'

const initialState = {
    presentationClip: {},
};


export default function (state = initialState, action) {
    switch (action.type) {
        case actions.GET_PRESENTATION_CLIP_REQUEST: {
            return {...state}
        }
        case actions.GET_PRESENTATION_CLIP_SUCCESS: {
            return {...state, presentationClip: action.payload}
        }

        case actions.CHANGE_PRESENTATION_CLIP_REQUEST: {
            return {...state, preloader: true}
        }
        case actions.CHANGE_PRESENTATION_CLIP_SUCCESS: {
            return {...state, presenatationClip: action.payload}
        }
        default:
            return state
    }
}

