import React from 'react'
require('../../styles/refactoredStyles/notification.less');

class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let error = this.props.error;
        let result = null;
        if (error.state == "ERR") {
            result = <div className="alert alert-danger custom-error">
                <span>{error.body}</span>
            </div>
        }
        return result;
    }

}

export default Notification