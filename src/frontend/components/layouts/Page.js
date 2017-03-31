import React from 'react'
import Footer from './Footer'
import  NavBar from './NavBar'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {changeLanguage} from '../../actions/common';


require('../../styles/refactoredStyles/global.less');
require('../../styles/newStyles/presentationClip.less');


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




{/*
<div className="clip-bar">
    <Notification error={this.props.notification}/>

    <div id="cilp-tabs-wrapper">
        <ul className="clip-tabs">
            <li>
                <Link activeClassName='active-page-button-clip-list'
                      className="btn-menu-button btn-menu-button-clip-list"
                      to='/portfolio/weddings' onClick={this._handleSwitchClipListByTag}>
                    {strings.portfolio.weddings}
                </Link>
            </li>
            <li >
                <Link activeClassName='active-page-button-clip-list'
                      className="btn-menu-button btn-menu-button-clip-list"
                      to='/portfolio/voice' onClick={this._handleSwitchClipListByTag}>
                    {strings.portfolio.voice}
                </Link>
            </li>
            <li >
                <Link activeClassName='active-page-button-clip-list'
                      className="btn-menu-button btn-menu-button-clip-list"
                      to='/portfolio/other' onClick={this._handleSwitchClipListByTag}>
                    {strings.portfolio.commercialProjects}
                </Link>
            </li>
        </ul>
    </div>
    <ul id="slide-contacts-id" className="slide-contacts">
        <li>
            <a className="social-network" href="#">
                <i className="fa fa-vk "></i>
            </a>
        </li>

        <li>
            <a className="social-network" href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
        </li>

        <li>
            <a className="social-network" href="#">
                <i className="fa fa-instagram " aria-hidden="true"></i>
            </a>
        </li>
    </ul>
    <div className="pagination-wrapper">
        <div className="pagination-frame">
            <Pagination
                prev
                next
                first
                last
                bsSize="small"
                items={this.props.pageNum}
                activePage={activePage}
                onSelect={this._handlePagination}
            />
        </div>
    </div>
    <ClipLayout clipList={this.props.clipList}/>
    <div className="pagination-wrapper">
        <div className="pagination-frame">
            <Pagination
                prev
                next
                first
                last
                bsSize="small"
                items={this.props.pageNum}
                activePage={activePage}
                onSelect={this._handlePagination}
            />
        </div>
    </div>
</div>


*/}



