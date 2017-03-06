import {ACCEPT_ADD_CLIP_FORM_CHANGES, CLEAR_ADD_CLIP_FORM} from '../constants/syncActionTypes'


export function validateAddClipForm(value, name) {
    let isValid = false;
    if (value.length > 0) {
        isValid = true
    }

    return {
        type: ACCEPT_ADD_CLIP_FORM_CHANGES,
        payload: {
            name: name,
            isValid: isValid
        }
    }
}


export function clearAddClipForm() {
    return {
        type: CLEAR_ADD_CLIP_FORM
    }
}



