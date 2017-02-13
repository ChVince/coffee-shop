import React from 'react'

import {NavItem, Nav,Pagination} from 'react-bootstrap'

import VideoLayout from './ClipLayout'
/*require('../../../styles/videoBar.less');*/

class VideoBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSelect(eventKey) {
        event.preventDefault();
        alert(`selected ${eventKey}`);
    }


    handleNextPage = (eventKey) => {
        /*this.props.getArticles(eventKey);*/
    };

    render() {
        return (
            <div className="container">
                <div className="video-bar-wrapper">
                    <div className="tab-wrapper">
                        <Nav bsStyle="tabs" activeKey="Dubbing" onSelect={this.handleSelect}>
                            <NavItem eventKey="Dubbing" title="Dubbing" href="/home">Dubbing</NavItem>
                            <NavItem eventKey="Interview" title="Interview">Interview</NavItem>
                            <NavItem eventKey="Other" title="Other">Other</NavItem>
                        </Nav>
                    </div>
                    <VideoLayout {...this.props}/>
                    <div className="clip-pagination-wrapper">
                    <Pagination bsSize="medium"
                                items={4}
                                activePage={1}
                                onSelect={this.handleNextPage}/>
                    </div>
                </div>
            </div>
        );
    }
}

VideoBar.propTypes = {
    view: React.PropTypes.string.isRequired,
    clipList: React.PropTypes.array.isRequired
};


export  default VideoBar;
