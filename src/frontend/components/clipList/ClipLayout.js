import React from 'react'
import Clip from './Clip'


class ClipLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let clipList =[];
        if (this.props.clipList && this.props.clipList.length > 0) {
            clipList = this.props.clipList.map((clip, index) => {
                return(
                    <div className="
                    clip-wrapper-1
                    col-lg-offset-2 col-lg-8
                    col-md-offset-2 col-md-8" key={index}>
                        <Clip clip={clip} />
                    </div>
                    )
            });
        }
        return (
            <div className="row">
                {clipList}
            </div>
        )
    }
}


ClipLayout.propTypes = {
    clipList: React.PropTypes.array.isRequired
};

export default ClipLayout;