import React from 'react'
import {Nav, NavItem, Button} from 'react-bootstrap'
import {Link,IndexLink} from 'react-router'
import {MENU_URLs} from '../../utils/innerURLs'
require('../../styles/refactoredStyles/navbar.less');


class MenuButtons extends React.Component {
    constructor(props) {
        super(props);

    }

    _generateTabs() {
        let menuTabs = ['Главная', 'Портфолио', 'Контакты', 'О нас'];
        let menuHref = [MENU_URLs.HOME_URL, MENU_URLs.PORTFOLIO, MENU_URLs.CONTACTS_URL, MENU_URLs.ABOUT_URL];
        let tabs = [];
        for (let i = 0; i < menuTabs.length ; i++) {
            let btnClass = menuHref[i] == this.props.activeTab ? 'btn-menu-button active-page-button' : 'btn-menu-button';

            if (menuTabs[i] != 'Портфолио') {
                tabs[i] = <li key={i}>
                    <Link to={menuHref[i]}>
                        <button className={btnClass}>
                            {menuTabs[i]}
                        </button>
                    </Link>
                </li>
            } else {
                tabs[i] = <li key={i}>
                    <button className={btnClass + " btn-menu-dropdown"}>
                        {menuTabs[i]}
                    </button>
                    <ul className="portfolio-header-tabs">
                        <li>
                            <IndexLink to={menuHref[i].WEDDINGS_URL}>
                                <button className="btn-menu-button dropdown-button">
                                    Weddings
                                </button>
                            </IndexLink>
                        </li>
                        <li>
                            <IndexLink to={menuHref[i].VOICE_URL}>
                                <button className="btn-menu-button dropdown-button">
                                    Voice
                                </button>
                            </IndexLink>
                        </li>
                        <li>
                            <IndexLink to={menuHref[i].OTHER_URL}>
                                <button className="btn-menu-button dropdown-button">
                                    Other
                                </button>
                            </IndexLink>
                        </li>
                    </ul>
                </li>
            }
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
    activeTab: React.PropTypes.string.isRequired
};


class NavBar extends React.Component {
    render() {
        return (
            <header>
                <div className="header-logo"/>
                <div className="menu">
                    <MenuButtons activeTab={this.props.activeTab}/>
                </div>
            </header>

        )
    }
}

NavBar.propTypes = {
    activeTab: React.PropTypes.string.isRequired
};

export default  NavBar;

