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


require('../../styles/newStyles/clipList.less');


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
            <div className="container-fluid">
                <Notification error={this.props.notification}/>

                <div className="row"
                     id ="cilp-page-tabs-wrapper">




                        <ul className="clip-page-tabs">
                            <li>
                                <Link activeClassName='active-page-button-clip-list'
                                      className="btn-menu-button btn-menu-button-clip-page-list"
                                      to='/portfolio/weddings' onClick={this._handleSwitchClipListByTag}>
                                    {strings.portfolio.weddings}
                                </Link>
                            </li>
                            <li >
                                <Link activeClassName='active-page-button-clip-list'
                                      className="btn-menu-button btn-menu-button-clip-page-list"
                                      to='/portfolio/voice' onClick={this._handleSwitchClipListByTag}>
                                    {strings.portfolio.voice}
                                </Link>
                            </li>
                            <li >
                                <Link activeClassName='active-page-button-clip-list'
                                      className="btn-menu-button btn-menu-button-clip-page-list"
                                      to='/portfolio/other' onClick={this._handleSwitchClipListByTag}>
                                    {strings.portfolio.commercialProjects}
                                </Link>
                            </li>
                        </ul>


                </div>

                <div className="row">
                    <div className="

                  col-lg-offset-4  col-lg-4
                  col-md-offset-4  col-md-4
                  col-sm-offset-4  col-sm-4
                  col-xs-offset-4  col-xs-4
">
                        <div className="pagination-clip-page-wrapper">
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

                <ClipLayout clipList={this.props.clipList}/>

                <div className="row">
                    <div className="

                  col-lg-offset-4  col-lg-4
                  col-md-offset-4  col-md-4
                  col-sm-offset-4  col-sm-4
                  col-xs-offset-4  col-xs-4
">

                        <div className="pagination-clip-page-wrapper">
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