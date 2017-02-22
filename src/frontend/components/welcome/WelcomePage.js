import React from 'react';
import {bindActionCreators} from 'redux'
import {getPresentationClip} from '../../actions'
import {connect} from 'react-redux'


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
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        presentationClip: state.welcomePage.presentationClip
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPresentationClip: bindActionCreators(getPresentationClip, dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);



