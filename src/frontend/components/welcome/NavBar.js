import React from 'react'
import {Nav, NavItem, Button} from 'react-bootstrap'
import {Link} from 'react-router'
require('../../styles/new-styles/navbar.less');


class NavBar extends React.Component {
    render() {
        return (
            <header className="nr-navbar">
                <div className="greeting-logo">

                </div>
                <div className="menu-wrapper">
                    <ul className="menu">
                        <li>
                            <button className="btn-menu-button">
                                Home
                            </button>
                        </li>
                        <li>
                            <button className="btn-menu-button">
                                Портфолио
                            </button>
                        </li>
                        <li>
                            <button className="btn-menu-button">
                                Контакты
                            </button>
                        </li>
                        <li>
                            <button className="btn-menu-button">О нас
                            </button >
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default  NavBar;

