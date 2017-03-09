import React from 'react'
import {Link, IndexLink} from 'react-router'
import {MENU_URLs} from '../../utils/innerURLs'
import translate from '../../utils/translate'

require('../../styles/refactoredStyles/navbar.less');


class MenuButtons extends React.Component {
    constructor(props) {
        super(props);

    }

    _generateTabs() {
        let header = this.props.strings;
        let menuTabs = [header.home, header.portfolio.index, header.contacts, header.about];
        let menuHref = [MENU_URLs.HOME_URL, MENU_URLs.PORTFOLIO, MENU_URLs.CONTACTS_URL, MENU_URLs.ABOUT_URL];
        let tabs = [];
        for (let i = 0; i < menuTabs.length; i++) {
            if (menuTabs[i] !=  header.portfolio.index) {
                tabs[i] = <li key={i}>
                    <IndexLink className='btn-menu-button' activeClassName='active-page-button' to={menuHref[i]}>
                        {menuTabs[i]}
                    </IndexLink>
                </li>
            } else {
                let portfolioTagList = header.portfolio;
                tabs[i] = <li key={i}>
                    <Link to={menuHref[i].INDEX} activeClassName='active-page-button' className="btn-menu-button">
                        {menuTabs[i]}
                    </Link>
                    <ul className="portfolio-header-tabs">
                        <li>
                            <Link activeClassName='active-page-button' className="btn-menu-button dropdown-button"
                                  to={menuHref[i].WEDDINGS_URL}>
                                {portfolioTagList.weddings}
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName='active-page-button' className="btn-menu-button dropdown-button"
                                  to={menuHref[i].VOICE_URL}>
                                {portfolioTagList.voice}
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName='active-page-button' className="btn-menu-button dropdown-button"
                                  to={menuHref[i].OTHER_URL}>
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
            <header id="top">
                <div className="header-logo"/>
                <div className="menu">
                    <MenuButtons {...this.props}/>
                </div>
                <div className="choose-lang">
                    <a href="/" onClick={() => this.props.onChangeLanguage('ru')} className="btn-menu-button button-lang">Русский</a>
                    <div className="lang-border"></div>
                    <a href="/" onClick={() => this.props.onChangeLanguage('en')} className="btn-menu-button button-lang">English</a>
                </div>
            </header>

        )
    }
}

NavBar.propTypes = {
    onChangeLanguage: React.PropTypes.func.isRequired,
    strings: React.PropTypes.object
}



export default  translate('NavBar')(NavBar);


