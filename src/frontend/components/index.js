import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './welcome/containers/WelcomePage';
import About from './About'
import {Provider} from 'react-redux'
import createStoreForPage from '../store'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'


let store = createStoreForPage();


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/">
                <IndexRoute component={WelcomePage}/>
                <Route path="about" component={About}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));
