import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './WelcomePage';
import {Provider} from 'react-redux'
import coffeeApp from '../../reducers'
import createStoreForPage from '../../store'


let store = createStoreForPage(coffeeApp, {});


ReactDOM.render(
    <Provider store={store}>
        <WelcomePage />
    </Provider>
    , document.getElementById('root'));
