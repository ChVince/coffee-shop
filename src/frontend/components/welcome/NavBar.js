import React from 'react'
import {Nav, NavItem, Button} from 'react-bootstrap'
import {Link} from 'react-router'
require('../../styles/newStyles/navbar.less');


class NavBar extends React.Component {
    render() {
        return (
            <header className="data-navbar">
                <div className="container-fluid">
                    <div className="menu-header">
                        <div className="navbar-header">
                            <a className="navbar-brand">
                                <h1 className="greeting-logo">New Record</h1>
                            </a>
                        </div>
                        <div className="menu-wrapper">
                            <div className="menu">
                                <div className="menu-button">
                                    <Link to="about">
                                        <Button bsSize="large" bsStyle="customLogin">Login</Button>
                                    </Link>
                                </div>
                                <div className="menu-button menu-support">
                                    <Link to="about">
                                        <Button bsSize="large" bsStyle="customLink">About</Button>
                                    </Link>
                                </div>
                                <div className="menu-button menu-support">
                                    <Link to="about">
                                        <Button bsSize="large" bsStyle="customLink">Smth</Button>
                                    </Link>
                                </div>
                                <div className="menu-button menu-support">
                                    <Link to="about">
                                        <Button bsSize="large" bsStyle="customLink">Smth</Button>
                                    </Link>
                                </div>
                                <div className="menu-button menu-support">
                                    <Link to="about">
                                        <Button bsSize="large" bsStyle="customLink">Smth</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}

export default  NavBar;

{/*
 <div className="data-navbar navbar navbar-default navbar-fat navbar-clean">

 </div>
 */
}


{/*
 <div className="navbar-collapse collapse">
 <ul id="main-nav" className="nav navbar-nav navbar-right">
 <li>
 <Link to="about">
 <Button bsSize="large" bsStyle="customLink">About</Button>
 </Link>
 </li>
 <li>
 <Link to="about">
 <Button bsSize="large" bsStyle="customLink">Smth</Button>
 </Link>
 </li>
 <li>
 <Link to="about">
 <Button bsSize="large" bsStyle="customLink">About</Button>
 </Link>
 </li>
 <li>
 <Link to="about">
 <Button bsSize="large" bsStyle="customLink">About</Button>
 </Link>
 </li>
 <li>
 <Button bsSize="large" bsStyle="customLogin">Login</Button>
 </li>
 </ul>
 </div>*/
}
