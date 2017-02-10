import React from 'react'
import {Button} from'react-bootstrap'

require('../../styles/annotation.less');
class Annotation extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="annotation">

                <div className="annotation-text-wrapper">
                    <div className="annotation-text">
                        We proud of our work and promise that you will enjoy
                        Today was sunny day, and I have been working all day long
                    </div>

                </div>
                <div className="read-more-wrapper">
                    <Button bsSize="large" bsStyle="custom-read-more">
                        Read More
                    </Button>
                </div>
            </div>
        )
    }


}
export default Annotation;