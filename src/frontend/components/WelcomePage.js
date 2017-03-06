import React from 'react';
import {bindActionCreators} from 'redux'
import {getPresentationClip} from '../actions/clip'
import {connect} from 'react-redux'
import Notification from './common/Notification'

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.getPresentationClip();
    }


    render() {
        let presentationClipView;
        if (this.props.presentationClip._id) {
            presentationClipView =
                <iframe className="portfolio-clip" src={this.props.presentationClip.url} frameBorder="0"
                        webkitAllowFullScreen mozAllowFullScreen
                        allowFullScreen>
                </iframe>
        }
        return (
            <div className="welcome-page">
                {presentationClipView}
                <Notification error={this.props.notification}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        presentationClip: state.clipPage.presentationClip,
        notification: state.notificationHandler.notification
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPresentationClip: bindActionCreators(getPresentationClip, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);



