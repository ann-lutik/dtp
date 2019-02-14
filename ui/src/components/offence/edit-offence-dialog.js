import React, { Component } from 'react';
import { FormGroup, Form, ControlLabel, FormControl, Button, ButtonGroup, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";

export default class EditOffenceDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entity : {}
        }
    }

    handleSubmit(event) {
        const {onConfirm, value}  = this.props;
        event.preventDefault();
        event.stopPropagation();
        const entity = Object.assign({}, value || {}, this.state.entity);
        onConfirm(entity);
    }

    updateEntity(propName, newVal) {
        this.setState({entity: Object.assign({}, this.state.entity, {[propName]: newVal})});
    }

    render() {
        const {show, onHide, title, value} = this.props;
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
                          <ControlLabel>{'Название нарушения'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.nameOffence : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('nameOffence', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
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
