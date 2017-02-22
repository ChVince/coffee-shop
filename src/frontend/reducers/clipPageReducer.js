import * as actions from '../constants/asyncActionTypes'


const initialState = {
    clipList: [],
    preloader: false,
    notification: {
        error: false,
        msg: ''
    },
    page: 0,
    pageNum: 0
};

export default  function (state = initialState, action) {
    switch (action.type) {

        case actions.ADD_CLIP_REQUEST:
        case actions.GET_PRESENTATION_CLIP_REQUEST:
        case actions.GET_CLIP_LIST_NUM_REQUEST:
        case actions.GET_CLIP_LIST_REQUEST:
        case actions.REMOVE_CLIP_REQUEST: {
            return {...state, preloader: true}
        }

        case actions.ADD_CLIP_SUCCESS: {
            return {...state, preloader: false}
        }
        case actions.GET_CLIP_LIST_SUCCESS: {
            return {...state
                , clipList: action.payload.clipList,
                page: action.payload.page,
                preloader: false}
        }
        case actions.GET_PRESENTATION_CLIP_SUCCESS: {
            return {...state, presenatationClip: action.payload, preloader: false}
        }
        case actions.GET_CLIP_LIST_NUM_SUCCESS: {
            return {...state, pageNum: action.payload, preloader: false}
        }
        case actions.REMOVE_CLIP_SUCCESS: {
            let removeClipId = action.payload;
            let newClipList = state.clipList.filter((item) => {
                return item._id != removeClipId
            });
            return {...state, clipList: newClipList, preloader: false}
        }


        case actions.GET_CLIP_LIST_FAILURE:
        case actions.ADD_CLIP_FAILURE:
        case actions.GET_PRESENTATION_CLIP_FAILURE:
        case actions.GET_CLIP_LIST_NUM_FAILURE:
        case actions.REMOVE_CLIP_FAILURE: {
            return {...state, notification: action.payload, preloader: false}
        }

        default :
            return state;
    }

}

