import React from 'react'
import Footer from './Footer'
import  NavBar from './NavBar'

require('../../styles/new-styles/global.less');
require('../../styles/refactoredStyles/presentationClip.less');


class Page extends React.Component {
    _findActive() {
        let active;
        console.log(this.props.location.pathname);
        switch (this.props.location.pathname) {
            case '/':
                active = 1;
                break;
            case 'portfolio':
            case '/portfolio':
                active = 2;
                break;
            case 'contacts':
            case '/contacts':
                active = 3;
                break;
            case 'about':
            case '/about':
                active = 4;
                break;
            default:
                active = 1;
        }
        return active;
    }

    render() {
        let activeTab = this._findActive();
        return (
            <div className="page-layout">
                <NavBar activeTab={activeTab}/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}


export default (Page);