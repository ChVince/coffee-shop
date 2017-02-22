import React from 'react'
import Footer from './Footer'
import  NavBar from './NavBar'


require('../../styles/new-styles/global.less');
require('../../styles/refactoredStyles/presentationClip.less');


class Page extends React.Component {

    render() {
        return (
            <div className="page-layout">
                <NavBar activeTab={this.props.location.pathname}/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}


export default (Page);