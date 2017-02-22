import {ACCEPT_ADD_CLIP_FORM_CHANGES} from '../constants/syncActionTypes'
import * as actions from '../constants/asyncActionTypes'


const initialState = {
    validateForms: [
        {
            name: "section",
            isValid: false
        },
        {
            name: "url",
            isValid: false
        },
        {
            name: "title",
            isValid: false
        }
    ]
};


export default function (state = initialState, action) {
    switch (action.type) {
        case ACCEPT_ADD_CLIP_FORM_CHANGES :
            let newValidateForms = state.validateForms.map((item) => {
                let newItem = item;
                if (newItem.name == action.payload.name) {
                    newItem.isValid = action.payload.isValid
                }
                return newItem
            });

            return {...state, validateForms: newValidateForms};
        default :
            return state;
    }
}
