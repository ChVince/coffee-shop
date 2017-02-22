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
                    <div className="clip-wrapper">
                        <Clip clip={clip} key={index}/>
                    </div>
                    )
            });
        }
        return (
            <div className="clip-list-wrapper">
                {clipList}
            </div>
        )
    }
}


ClipLayout.propTypes = {
    clipList: React.PropTypes.array.isRequired
};

export default ClipLayout;