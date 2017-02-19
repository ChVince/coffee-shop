import * as actions from '../constants/actionTypes'


const initialState = {
    clipList: [],
    preloader: false,
    notification: {
        error: false,
        msg: ''
    }
};

export default  function (state = initialState, action) {
    switch (action.type) {

        case actions.ADD_CLIP_REQUEST:
        case actions.GET_PRESENTATION_CLIP_REQUEST:
        case actions.GET_CLIP_LIST_REQUEST:
        case actions.REMOVE_CLIP_REQUEST:
        case actions.CHANGE_PRESENTATION_CLIP_REQUEST:{
            return {...state, preloader: true}
        }


        case actions.ADD_CLIP_SUCCESS:{
            return {...state, preloader: false}
        }
        case actions.GET_CLIP_LIST_SUCCESS: {
            return {...state, clipList: action.payload, preloader: false}
        }
        case actions.GET_PRESENTATION_CLIP_SUCCESS: {
            return {...state, presenatationClip: action.payload, preloader: false}
        }
        case actions.REMOVE_CLIP_SUCCESS:{
            return {...state, preloader: false}
        }
        case actions.CHANGE_PRESENTATION_CLIP_SUCCESS:{
            return {...state, presenatationClip: action.payload, preloader: false}
        }



        case actions.GET_CLIP_LIST_FAILURE:
        case actions.ADD_CLIP_FAILURE:
        case actions.GET_PRESENTATION_CLIP_FAILURE:
        case actions.REMOVE_CLIP_FAILURE:
        case actions.CHANGE_PRESENTATION_CLIP_FAILURE:{
            return {...state, notification: action.payload, preloader: false}
        }

        default :
            return state;
    }

}

