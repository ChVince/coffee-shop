import {createStore} from 'redux'


export default function createStoreForPage(reducer, initialState) {
    return createStore(reducer, initialState);
}