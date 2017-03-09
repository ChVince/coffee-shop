import React from 'react'
import {Pagination} from 'react-bootstrap'
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getClipList, getClipListPageNumByTag} from '../../actions/clip'
import ClipLayout from './ClipLayout'
import scrollControl from '../../utils/scrollStyleControl';
import Notification from '../common/Notification'
import translate from '../../utils/translate'
import * as _ from 'lodash'


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
        window.scrollTo(0, 0);
        this.props.getClipList(this.props.tag, eventkey)
    };


    _handleSwitchClipListByTag = () => {
        window.scrollTo(0, 0);
    };


    render() {
        let activePage = this.props.page;
        let strings = this.props.strings;
        return (
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
        );
    }
}


function _parseLastPathURL(url) {
    return url.substr(url.lastIndexOf('/') + 1);
}

ClipBar.propTypes = {
    clipList: React.PropTypes.array.isRequired,
    pageNum: React.PropTypes.number.isRequired,
    page: React.PropTypes.number.isRequired,
    strings: React.PropTypes.object
};


function mapStateToProps(state, ownProps) {
    return {
        clipList: state.clipPage.clipList,
        tag: _parseLastPathURL(ownProps.location.pathname),
        pageNum: state.clipPage.pageNum,
        page: state.clipPage.page,
        notification: state.notificationHandler.notification
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getClipList: bindActionCreators(getClipList, dispatch),
        getClipListPageNumByTag: bindActionCreators(getClipListPageNumByTag, dispatch)
    }
}

const decorators = _.flow([
    connect(mapStateToProps, mapDispatchToProps),
    translate('ClipBar')
]);


export default decorators(ClipBar);