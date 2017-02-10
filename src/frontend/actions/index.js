import {
    GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE,
    GET_ARTICLES_NUM_FAILURE, GET_ARTICLES_NUM_REQUEST, GET_ARTICLES_NUM_SUCCESS
}
    from '../constants/actionTypes'
import {GET_ARTICLES_URL, GET_ARTICLES_NUM_URL} from './../constants/URLs'

import axios from 'axios'

export function getArticles(page) {
    let prevPage = page - 1;
    return (dispatch) => {
        dispatch({
            type: GET_ARTICLES_REQUEST,
            payload: page
        });

        axios.get(GET_ARTICLES_URL + prevPage)
            .then(response => {
                dispatch({
                    type: GET_ARTICLES_SUCCESS,
                    payload: response.data.entity.body
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_ARTICLES_FAILURE,
                    payload: error.data.entity.body
                })
            })
    }
}


export function getArticlesPageNum() {
    return (dispatch) => {
        dispatch({
            type: GET_ARTICLES_NUM_REQUEST
        });
        axios.get(GET_ARTICLES_NUM_URL)
            .then(response => {
                dispatch({
                    type: GET_ARTICLES_NUM_SUCCESS,
                    payload: response.data.entity.body
                });
            })
            .catch(error => {
                return {
                    type: GET_ARTICLES_NUM_FAILURE,
                    payload: error.data.entity.body
                }
            });
    }
}


