import {combineReducers} from 'redux'
import clipPageReducer from './clipReducer'
import adminPageReducer from './adminPageReducer'
import commonReducer from './commonReducer'
import notificationReducer from './notificationReducer'
import loginReducer from './loginReducer'

const coffeeApp = combineReducers({
    clipPage: clipPageReducer,
    adminPage: adminPageReducer,
    common: commonReducer,
    notificationHandler: notificationReducer,
    loginPage: loginReducer
});

export default coffeeApp;


