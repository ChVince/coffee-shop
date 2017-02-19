import React from 'react'
import {NavItem, Nav, Pagination} from 'react-bootstrap'
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getClipList} from '../../actions/index'
import ClipLayout from '../video/ClipLayout'

require('../../styles/new-styles/clipList.less');


class ClipBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getClipList();
    }


    render() {
        return (
            <div className="clip-bar">
                <div className="cilp-tabs-wrapper">
                    <ul className="clip-tabs">
                        <li>
                            <Link to='weddings'>
                                <button className='btn-menu-button'>
                                    wedding
                                </button>
                            </Link>
                        </li>
                        <li >
                            <Link to='voice'>
                                <button className='btn-menu-button'>
                                    voice
                                </button>
                            </Link>
                        </li>
                        <li >
                            <Link to='other'>
                                <button className='btn-menu-button'>
                                    other
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className="slide-contacts">

                    <li>
                        <a className="social-network" href="#">
                            <i className="fa fa-vk fa-2x"></i>
                        </a>
                    </li>

                    <li>
                        <a className="social-network" href="#">
                            <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                        </a>
                    </li>

                    <li>
                        <a className="social-network" href="#">
                            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
                <ClipLayout clipList={this.props.clipList}/>
            </div>
        );
    }
}


ClipBar.propTypes = {
    clipList: React.PropTypes.array.isRequired,
};


function mapStateToProps(state) {
    return {
        clipList: state.clipPage.clipList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getClipList: bindActionCreators(getClipList, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ClipBar);