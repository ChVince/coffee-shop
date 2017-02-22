import {combineReducers} from 'redux'
import clipPageReducer from './clipPageReducer'
import welcomePageReducer from './welcomePageReducer'
import adminPageReducer from './adminPageReducer'

const coffeeApp = combineReducers({
    clipPage: clipPageReducer,
    welcomePage: welcomePageReducer,
    adminPage: adminPageReducer,
});

export default coffeeApp;


