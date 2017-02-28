import {combineReducers} from 'redux'
import clipPageReducer from './clipPageReducer'
import welcomePageReducer from './welcomePageReducer'
import adminPageReducer from './adminPageReducer'
import commonReducer from './commonReducer'
import notificationReducer from './notificationReducer'
import loginReducer from './loginReducer'

const coffeeApp = combineReducers({
    clipPage: clipPageReducer,
    welcomePage: welcomePageReducer,
    adminPage: adminPageReducer,
    common: commonReducer,
    notificationHandler: notificationReducer,
    loginPage: loginReducer
});

export default coffeeApp;


