import {combineReducers} from 'redux'
import welcomePage from './welcome-page-reducer'

const coffeeApp = combineReducers({
    welcomePage: welcomePage
});

export default coffeeApp;


