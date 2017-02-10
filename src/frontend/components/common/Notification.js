import React from 'react'


class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let notification = this.props.notification;
        let result = null;
        if (notification.error) {
            result = <div className="alert alert-danger">
                <strong>Danger!</strong>
                {this.props.notification.msg}
            </div>
        }
        return result;
    }

}

Notification.propTypes = {
    notification: React.PropTypes.object.isRequired
};

export default Notification