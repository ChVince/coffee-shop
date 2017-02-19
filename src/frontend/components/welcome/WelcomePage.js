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

        return (
            <div className="welcome-page">
                <iframe className="portfolio-clip" src="https://player.vimeo.com/video/173658205"  frameBorder="0" webkitAllowFullScreen mozAllowFullScreen allowFullScreen></iframe>
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



