import React from 'react'
import {NavItem, Nav, Pagination} from 'react-bootstrap'
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getClipList, getClipListPageNumByTag} from '../../actions/index'
import ClipLayout from '../video/ClipLayout'
import scrollControl from '../../utils/scrollStyleControl';


require('../../styles/refactoredStyles/clipList.less');


class ClipBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        scrollControl();
        this.props.getClipListPageNumByTag(this.props.tag);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.tag != nextProps.tag) {
            this.props.getClipListPageNumByTag(nextProps.tag);
        }
    }

    _handlePagination = (eventkey) => {
        this.props.getClipList(this.props.tag,eventkey)
    };

    render() {
        let activePage = this.props.page + 1;
        return (
            <div className="clip-bar">
                <div id="cilp-tabs-wrapper">
                    <ul className="clip-tabs">
                        <li>
                            <Link to='/weddings'>
                                <button
                                    className='btn-menu-button'>
                                    wedding
                                </button>
                            </Link>
                        </li>
                        <li >
                            <Link to='/voice'>
                                <button
                                    className='btn-menu-button'>
                                    voice
                                </button>
                            </Link>
                        </li>
                        <li >
                            <Link to='/other'>
                                <button
                                    className='btn-menu-button'>
                                    other
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul id="slide-contacts-id" className="slide-contacts">
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
                <div className="pagination-wrapper">
                    <Pagination className="user-pagination" bsSize="small"
                                items={this.props.pageNum}
                                activePage={activePage}
                                onSelect={this._handlePagination}
                    />
                </div>
                <ClipLayout clipList={this.props.clipList}/>
                <div className="pagination-wrapper">
                    <Pagination className="user-pagination" bsSize="small"
                                items={this.props.pageNum}
                                activePage={activePage}
                                onSelect={this._handlePagination}
                    />
                </div>
            </div>
        );
    }
}


ClipBar.propTypes = {
    clipList: React.PropTypes.array.isRequired,
    pageNum: React.PropTypes.number.isRequired,
    page: React.PropTypes.number.isRequired

};


function mapStateToProps(state, ownProps) {
    return {
        clipList: state.clipPage.clipList,
        tag: ownProps.location.pathname.substr(1),
        pageNum: state.clipPage.pageNum,
        page: state.clipPage.page,
        preloader: state.clipPage.preloader
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getClipList: bindActionCreators(getClipList, dispatch),
        getClipListPageNumByTag: bindActionCreators(getClipListPageNumByTag, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ClipBar);