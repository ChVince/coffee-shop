import React from 'react'
import Footer from './Footer'
import  NavBar from './NavBar'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {changeLanguage} from '../../actions/common';


require('../../styles/refactoredStyles/global.less');
require('../../styles/refactoredStyles/presentationClip.less');


class Page extends React.Component {

    render() {
        return (
            <div className="page-layout">
                <NavBar onChangeLanguage={this.props.changeLanguage}/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }


    getChildContext() {
        return {
            currentLanguage: this.props.currentLanguage
        };
    }
}


Page.propTypes = {
    children: React.PropTypes.object.isRequired,
};

Page.childContextTypes = {
    currentLanguage: React.PropTypes.string.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        changeLanguage: bindActionCreators(changeLanguage,dispatch)
    };
}


function mapStateToProps(state) {
    return {
        currentLanguage: state.common.currentLang
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Page);