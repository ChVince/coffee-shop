import {createStore} from 'redux'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import coffeeApp from '../reducers'
import initialState from './initialState'


function createStoreForPage() {
    const logger = createLogger();
    const store = createStore(coffeeApp, initialState, applyMiddleware(thunk, logger));

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}


export default  createStoreForPage;