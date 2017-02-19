import {combineReducers} from 'redux'
import clipPageReducer from './clipPageReducer'
import welcomePageReducer from './welcomePageReducer'

const coffeeApp = combineReducers({
    clipPage: clipPageReducer,
    welcomePage: welcomePageReducer
});

export default coffeeApp;


