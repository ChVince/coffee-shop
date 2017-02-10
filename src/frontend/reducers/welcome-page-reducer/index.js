import {
    GET_ARTICLES_FAILURE, GET_ARTICLES_SUCCESS, GET_ARTICLES_REQUEST,
    GET_ARTICLES_NUM_FAILURE, GET_ARTICLES_NUM_REQUEST, GET_ARTICLES_NUM_SUCCESS
} from '../../constants/actionTypes'


const initialState = {
    page: 0,
    articles: [],
    spinner: false,
    pageNum: 1,
    notification: {
        error: false,
        msg: ''
    }

};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES_REQUEST:
            return {...state, page: action.payload, spinner: true};
        case GET_ARTICLES_SUCCESS: {
            return {...state, articles: action.payload, spinner: false}
        }
        case GET_ARTICLES_FAILURE : {
            return {
                ...state, spinner: false, notification: {
                    error: true,
                    msg: action.payload
                }
            }
        }
        case GET_ARTICLES_NUM_REQUEST:
            return {...state, spinner: true};
        case GET_ARTICLES_NUM_SUCCESS: {
            return {...state, pageNum: action.payload.pageNum, spinner: false};
        }
        case GET_ARTICLES_NUM_FAILURE :
            return {
                ...state, spinner: false,
                notification: {
                    error: true,
                    msg: action.payload
                }
            };
        default:
            return state;
    }
}

