import React from 'react'
import {Nav, NavItem, Button} from 'react-bootstrap'
import {Link} from 'react-router'
/*require('../../styles/new-styles/navbar.less');*/
require('../../styles/refactoredStyles/navbar.less');


class MenuButtons extends React.Component {
    constructor(props) {
        super(props);

    }

    _generateTabs() {
        let tabCount = 4;
        let menuTabs = ['Home', 'Портфолио', 'Контакты', 'О нас'];
        let menuHref = ['/', 'portfolio', 'contacts', 'about'];
        let tabs = [];
        for (let i = 0; i < tabCount; i++) {
            let btnClass = (i + 1) == this.props.activeTab ? 'btn-menu-button active-page-button' : 'btn-menu-button';
            tabs[i] = <li key={i}>
                <Link to={menuHref[i]}>
                    <button className={btnClass}>
                        {menuTabs[i]}
                    </button>
                </Link>
            </li>
        }
        return tabs;
    }

    render() {
        let tabs = this._generateTabs();


        return (
            <ul className="menu-list">
                {tabs}
            </ul>
        )
    }
}

MenuButtons.propTypes = {
    activeTab: React.PropTypes.number.isRequired
};


class NavBar extends React.Component {
    render() {
        return (
        /*   <div className="header-wrapper1">
               <div className="header-wrapper">
                <header className="nr-navbar">
                   <div className="greeting-logo-wrapper">
                        <div className="greeting-logo"/>
                      <div className="menu-wrapper">
                          <div className="menu-wrapper2">
                            <MenuButtons activeTab={this.props.activeTab}/>
                          </div>
                        </div>
                    </div>
                </header>
            </div>
            <div className="clip-separate"/>
           </div>*/
        <header>
            <div className="header-logo"/>
            <div className="menu">
                <MenuButtons activeTab={this.props.activeTab}/>

            </div>
            {/*<div className="header-border"/>*/}
        </header>
        )
    }
}

NavBar.propTypes = {
    activeTab: React.PropTypes.number.isRequired
};

export default  NavBar;

