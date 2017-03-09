import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './WelcomePage';
import About from './About'
import {Provider} from 'react-redux'
import createStoreForPage from '../store'
import {Router, Route, browserHistory, IndexRoute, IndexRedirect} from 'react-router'
import Page from './layouts/Page'
import ClipBar from './clipList'
import Contacts from './Contacts'
import AdminPage from './admin'
import Login from './Login'




let store = createStoreForPage();


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} >
            <Route path="/" component={Page}>
                <IndexRoute component={WelcomePage}/>
                <Route path="/about" component={About}/>
                <Route path="/login" component={Login}/>
                <Route path="/contacts" component={Contacts}/>
                <Route path="/portfolio" >
                    <IndexRedirect to="/portfolio/weddings"/>
                    <Route path="/portfolio/weddings" component={ClipBar}/>
                    <Route path="/portfolio/voice" component={ClipBar}/>
                    <Route path="/portfolio/other" component={ClipBar}/>
                </Route>
            </Route>
            <Route path="/admin" onEnter={AdminPage.onEnter} component={AdminPage}/>
        </Router>
    </Provider>
    , document.getElementById('root'));
