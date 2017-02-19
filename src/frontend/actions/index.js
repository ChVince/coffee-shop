import * as actions from '../constants/actionTypes'
import {CLIP_LIST_URL, PRESENTATION_CLIP_URL, CLIP_URL} from './../constants/URLs'
import axios from 'axios'

export function getClipList() {
    return (dispatch) => {
        dispatch({
            type: actions.GET_CLIP_LIST_REQUEST,
        });
        axios.get(CLIP_LIST_URL)
            .then(response => {
                dispatch({
                    type: actions.GET_CLIP_LIST_SUCCESS,
                    payload: response.data.entity.body
                })
            })
            .catch(error => {
                dispatch({
                    type: actions.GET_CLIP_LIST_FAILURE,
                    payload: error.data.entity.body
                })
            })
    }
}


export function getPresentationClip() {
    return (dispatch) => {
        dispatch({
            type: actions.GET_PRESENTATION_CLIP_REQUEST
        });

        axios.get(PRESENTATION_CLIP_URL)
            .then(response => {
                dispatch({
                    type: actions.GET_PRESENTATION_CLIP_SUCCESS,
                    payload: response.data.entity.body
                })
            })
            .catch(error => {
                dispatch ({
                    type: actions.GET_PRESENTATION_CLIP_FAILURE
                })
            })

    }
}


export function changePresentationClip(id) {
    return (dispatch) => {
        dispatch({
            type: actions.CHANGE_PRESENTATION_CLIP_REQUEST
        });


        axios.put(PRESENTATION_CLIP_URL, {
            id: id
        })
            .then(response => {
                dispatch({
                    type: actions.CHANGE_PRESENTATION_CLIP_SUCCESS,
                    payload: response.data.entity.body
                })
            })
            .catch(error => {
                dispatch ({
                    type: actions.CHANGE_PRESENTATION_CLIP_FAILURE
                })
            })

    }
}

export function addClip(clip) {
    return (dispatch) => {
        dispatch({
            type: actions.ADD_CLIP_REQUEST
        });
        axios.post(CLIP_URL, {
            clip: clip
        })
            .then(response => {
                dispatch({
                    type: actions.ADD_CLIP_SUCCESS,
                })
            })
            .catch(error => {
                dispatch ({
                    type: actions.ADD_CLIP_FAILURE
                })
            })

    }
}


export function removeClip(id) {
    return (dispatch) => {
        dispatch({
            type: actions.REMOVE_CLIP_REQUEST
        });
        axios.delete(CLIP_URL, {
            clip: clip
        })
            .then(response => {
                dispatch({
                    type: actions.REMOVE_CLIP_SUCCESS,
                })
            })
            .catch(error => {
                dispatch ({
                    type: actions.REMOVE_CLIP_FAILURE
                })
            })

    }
}



