import React, { Component } from 'react';
import { FormGroup, Form, ControlLabel, FormControl, Button, ButtonGroup, Modal } from "react-bootstrap";

export default class MessageDialog extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {show, onHide, title, message} = this.props;
        return (
            <Modal show={show}
                   onHide={onHide}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ControlLabel>{message}</ControlLabel>
                </Modal.Body>
                <Modal.Footer style={{paddingBottom: 0}}>
                    <button className="btn btn-success" onClick={onHide}>OK</button>
                </Modal.Footer>
            </Modal>
        );
    }
}
