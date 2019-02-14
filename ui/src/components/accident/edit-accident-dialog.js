import React, { Component } from 'react';
import { FormGroup, Form, ControlLabel, FormControl, Button, ButtonGroup, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";

export default class EditAccidentDialog extends Component {

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
                          <ControlLabel>{'Дата ДТП'}</ControlLabel>
                          <DatePicker selected={this.state.displayStartDate}
                                      locale={'ru-RU'}
                                      onChange={date => {
                                          this.updateEntity('dateAccident', date.getMilliseconds());
                                          this.setState({displayStartDate : date});
                                      }}/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Тип ДТП'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.typeAccident : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('typeAccident', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Количество погибших'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.deathToll : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('deathToll', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Количество пострадавших'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.numberOfVictims : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('numberOfVictims', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Погодные условия'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.weather : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('weather', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Вид покрытия'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.typeOfCoating : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('typeOfCoating', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Вид сооружения дороги'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.viewRoadConstruction : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('viewRoadConstruction', newVal.target.value);
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
