import React from 'react'

class Clip extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (

                <div className="clip">
                    <iframe className="clip" src={this.props.clip.url} frameBorder="0" webkitAllowFullScreen
                            mozAllowFullScreen allowFullScreen/>
                </div>

        )
    }
}


Clip.propTypes = {
    clip: React.PropTypes.object.isRequired
};

export default Clip
