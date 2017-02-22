import React from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './welcome/WelcomePage';
import About from './About'
import {Provider} from 'react-redux'
import createStoreForPage from '../store'
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'
import Page from './layouts/Page'
import ClipBar from './video'
import Contacts from './Contacts'
import AdminPage from './admin'


let store = createStoreForPage();


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Page}>
                <IndexRoute component={WelcomePage}/>
                <Route path="about" component={About}/>
                <Route path="contacts" component={Contacts}/>
                <Route path="weddings" component={ClipBar}/>
                <Route path="voice" component={ClipBar}/>
                <Route path="other" component={ClipBar}/>

                <Redirect from="portfolio" to="weddings"/>
            </Route>
            <Route path="admin" component={AdminPage}/>
        </Router>
    </Provider>
    , document.getElementById('root'));
