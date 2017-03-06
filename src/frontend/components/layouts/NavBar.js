import React from 'react'
import * as messages from '../../i18n/msg_ru.json'
import {Link,IndexLink} from 'react-router'
import {MENU_URLs} from '../../utils/innerURLs'

require('../../styles/refactoredStyles/navbar.less');



class MenuButtons extends React.Component {
    constructor(props) {
        super(props);

    }

    _generateTabs() {
        let header = messages.header;
        let menuTabs = [header.home, header.portfolio.index, header.contacts, header.about];
        let menuHref = [MENU_URLs.HOME_URL, MENU_URLs.PORTFOLIO, MENU_URLs.CONTACTS_URL, MENU_URLs.ABOUT_URL];
        let tabs = [];
        for (let i = 0; i < menuTabs.length ; i++) {
            if (menuTabs[i] != 'Портфолио') {
                tabs[i] = <li key={i}>
                    <IndexLink className='btn-menu-button' activeClassName='active-page-button' to={menuHref[i]}>
                            {menuTabs[i]}
                    </IndexLink>
                </li>
            } else {
                let portfolioTagList = header.portfolio;
                tabs[i] = <li key={i}>
                    <Link  to={menuHref[i].INDEX} activeClassName='active-page-button' className="btn-menu-button">
                        {menuTabs[i]}
                    </Link>
                    <ul className="portfolio-header-tabs">
                        <li>
                            <Link activeClassName='active-page-button' className="btn-menu-button dropdown-button" to={menuHref[i].WEDDINGS_URL}>
                                {portfolioTagList.weddings}
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName='active-page-button' className="btn-menu-button dropdown-button" to={menuHref[i].VOICE_URL}>
                                {portfolioTagList.voice}
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName='active-page-button' className="btn-menu-button dropdown-button"  to={menuHref[i].OTHER_URL}>
                                {portfolioTagList.commercialProjects}
                            </Link>
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



class NavBar extends React.Component {
    render() {
        return (
            <header>
                <div className="header-logo"/>
                <div className="menu">
                    <MenuButtons/>
                </div>
            </header>

        )
    }
}


export default  NavBar;

