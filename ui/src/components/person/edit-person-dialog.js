import React, { Component } from 'react';
import { FormGroup, Form, ControlLabel, FormControl, Button, ButtonGroup, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";

export default class EditPersonDialog extends Component {

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
                          <ControlLabel>{'Фамилия'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.surname : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('surname', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Имя'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.name : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('name', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Отчество'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.middleName : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('middleName', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Дата рождения'}</ControlLabel>
                          <DatePicker selected={this.state.displayStartDate}
                                      locale={'ru-RU'}
                                      onChange={date => {
                                          this.updateEntity('dateBirth', date.getMilliseconds());
                                          this.setState({displayStartDate : date});
                                      }}/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Адрес'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.addressPerson : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('addressPerson', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Роль'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.role : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('role', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Пароль'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.password : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('password', newVal.target.value);
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
