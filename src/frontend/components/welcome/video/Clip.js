import React from 'react'

class Clip extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="clip-wrapper">
                <div className="clip-data">
                    <div className="clip">

                    </div>
                    <h2>
                        <div className="clip-title">
                            {this.props.clip.title}
                        </div>
                    </h2>
                </div>
            </div>
        )
    }
}


Clip.propTypes = {
    clip: React.PropTypes.object.isRequired
};

export default Clip
