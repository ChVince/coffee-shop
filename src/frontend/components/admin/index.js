import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import cookie from '../../utils/cookie'
import {
    addClip,
    removeClip,
    changePresentationClip,
    getClipList,
    getClipListPageNumByTag
} from '../../actions/clip'
import {
    clearAddClipForm,
    validateAddClipForm,
} from '../../actions/admin'

import ToolBar from './ToolBar'
import Clip from '../clipList/Clip'

import {Button, Pagination} from 'react-bootstrap'


require('../../styles/refactoredStyles/clipList.less');
require('../../styles/refactoredStyles/admin.less');

class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: 'weddings'
        }

    }


    componentDidMount() {
        this.props.getClipListPageNumByTag(this.state.tag, 5);
    }

    removeClip = (id) => {
        this.props.removeClip(id);
    };

    changePresentationClip = (id) => {
        this.props.changePresentationClip(id)
    };

    _handlePagination = (eventkey) => {
        this.props.getClipList(this.state.tag, eventkey, 5)
    };

    _switchTag = (e) => {
        this.setState({tag: e.target.value});
    };

    _refreshList = () => {
        this.props.getClipListPageNumByTag(this.state.tag, 5);
    }


    static onEnter(nextState, replace) {
        const admin = cookie.getCookie('adminData');
        console.log(admin);
        if (!admin) {
            replace('/')
        }
    }

    logout = () => {
        cookie.deleteCookie('adminData');
        this.props.router.replace('/')
    }

    render() {
        let activePage = this.props.page;
        let clipList = [];
        if (this.props.adminClipList && this.props.adminClipList.length > 0) {
            clipList = this.props.adminClipList.map((clip, index) => {
                return (
                    <div className="admin-clip-wrapper2" key={index}>
                        <div className="admin-clip-wrapper">
                            <Clip clip={clip}/>
                        </div>
                        <div className="under-clip-buttons">
                            <Button bsSize="small" onClick={() => this.removeClip(clip._id)}
                                    bsStyle="danger">delete</Button>
                            <Button bsSize="small" onClick={() => this.changePresentationClip(clip._id)}
                                    bsStyle="warning">changePresentation</Button>
                        </div>
                    </div>
                )
            });
        }


        return (

            <div className="admin-page">
                <ToolBar notification={this.props.notification} clearAddClipForm={this.props.clearAddClipForm}
                         addClip={this.props.addClip}
                         validateForms={this.props.validateForms}
                         validateAddClipForm={this.props.validateAddClipForm} logout={this.logout}/>
                <div className="choose-by-tag">
                    <p>Выбрать видео по тегу:</p>
                    <select className="selectpicker" name="tag" onChange={(e) => this._switchTag(e)}
                            value={this.state.tag}>
                        <option value="weddings">weddings</option>
                        <option value="voice">voice</option>
                        <option value="other">other</option>
                    </select>
                    <Button bsStyle="success" onClick={() => this._refreshList()} className="refresh-by-tag"
                            type="button" value="Обновить">Обновить</Button>
                </div>
                <div>
                    <div className="pagination-wrapper">
                        <div className="pagination-frame">
                            <Pagination bsSize="small"
                                        prev
                                        next
                                        first
                                        last
                                        items={this.props.adminPageNum}
                                        activePage={activePage}
                                        onSelect={this._handlePagination}
                            />
                        </div>
                    </div>
                </div>
                <div className="admin-clip-list">
                    {clipList}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        validateForms: state.adminPage.validateForms,
        adminClipList: state.clipPage.clipList,
        adminPageNum: state.clipPage.pageNum,
        page: state.clipPage.page,
        notification: state.notificationHandler.notification
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getClipList: bindActionCreators(getClipList, dispatch),
        addClip: bindActionCreators(addClip, dispatch),
        validateAddClipForm: bindActionCreators(validateAddClipForm, dispatch),
        removeClip: bindActionCreators(removeClip, dispatch),
        changePresentationClip: bindActionCreators(changePresentationClip, dispatch),
        getClipListPageNumByTag: bindActionCreators(getClipListPageNumByTag, dispatch),
        clearAddClipForm: bindActionCreators(clearAddClipForm, dispatch)
    }
}


export default  connect(mapStateToProps, mapDispatchToProps)(AdminPage);


