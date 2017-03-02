import React from 'react'
import Footer from './Footer'
import  NavBar from './NavBar'


require('../../styles/refactoredStyles/global.less');
require('../../styles/refactoredStyles/presentationClip.less');


class Page extends React.Component {

    render() {
        return (
            <div className="page-layout">
                <NavBar/>
               {this.props.children}
                <Footer/>
            </div>
        )
    }
}


export default (Page);