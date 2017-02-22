import * as actions from '../constants/asyncActionTypes'

const initialState = {
    presentationClip: {},
    notification: {
        error: false,
        msg: ''
    }
};


export default function (state = initialState, action) {
    switch (action.type) {
        case actions.GET_PRESENTATION_CLIP_REQUEST: {
            return {...state, preloader: true}
        }
        case actions.GET_PRESENTATION_CLIP_SUCCESS: {
            return {...state, presentationClip: action.payload, preloader: false}
        }
        case actions.GET_PRESENTATION_CLIP_FAILURE: {
            return {...state, notification: action.payload, preloader: false}
        }
        case actions.CHANGE_PRESENTATION_CLIP_REQUEST:{
            return {...state, preloader: true}
        }
        case actions.CHANGE_PRESENTATION_CLIP_SUCCESS:{
            return {...state, presenatationClip: action.payload, preloader: false}
        }
        case actions.CHANGE_PRESENTATION_CLIP_FAILURE:{
            return {...state, notification: action.payload, preloader: false}
        }

        default:
            return state
    }
}

