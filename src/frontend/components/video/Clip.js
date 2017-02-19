import React from 'react'

class Clip extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="clip-wrapper">
                <div className="clip-title">
                    {this.props.clip.title}
                </div>
                <div className="clip">
                    <iframe className="clip"  src={this.props.clip.url} frameBorder="0" webkitAllowFullScreen mozAllowFullScreen allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}


Clip.propTypes = {
    clip: React.PropTypes.object.isRequired
};

export default Clip
