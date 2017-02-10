import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './containers/WelcomePage';
import {Provider} from 'react-redux'
import createStoreForPage from '../../store'


let store = createStoreForPage();


ReactDOM.render(
    <Provider store={store}>
        <WelcomePage />
    </Provider>
    , document.getElementById('root'));
