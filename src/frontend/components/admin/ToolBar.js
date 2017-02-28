import React from 'react'
import {Navbar, Nav, NavItem, Modal, Button} from 'react-bootstrap'
import AddClip from './AddClip'


class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }


    close = () => {
        this.props.clearAddClipForm();
        this.setState({showModal: false});
    };

    open = () => {
        this.setState({showModal: true});
    }

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>

                    <Nav>
                        <NavItem onClick={this.open}>Добавить видео</NavItem>
                    </Nav>
                </Navbar>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Добавить видео</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddClip {...this.props} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Закрыть</Button>
                    </Modal.Footer>
                </Modal>
                <Nav pullRight>
                    <NavItem onClick={this.props.logout}>Выйти</NavItem>
                </Nav>
            </div>
        )
    }
}


ToolBar.propTypes = {
    addClip: React.PropTypes.func.isRequired,
    validateAddClipForm: React.PropTypes.func.isRequired,
    clearAddClipForm: React.PropTypes.func.isRequired,
    validateForms: React.PropTypes.array.isRequired,
    logout: React.PropTypes.func.isRequired
}

export default ToolBar;
