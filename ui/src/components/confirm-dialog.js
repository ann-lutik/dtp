import React, { Component } from 'react';
import { FormGroup, Form, ControlLabel, FormControl, Button, ButtonGroup, Modal } from "react-bootstrap";
export default class ConfirmDialog extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        const {onConfirm}  = this.props;
        event.preventDefault();
        event.stopPropagation();
        onConfirm();
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
                    <Form onSubmit={e => this.handleSubmit(e)}>
                        <FormGroup>
                            <ControlLabel>{message}</ControlLabel>
                        </FormGroup>
                        <Modal.Footer style={{paddingBottom: 0}}>
                            <button type='submit' className="btn btn-success">Подтвердить</button>
                            <button type='button' onClick={onHide} className="btn btn-default">Отмена</button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}
