import React, { Component } from 'react';
import { FormGroup, Form, ControlLabel, FormControl, Modal } from "react-bootstrap";
import { getAccidents } from '../../routine/utils/services/accident-service'
import { getPersons} from '../../routine/utils/services/person-service'
import Combobox from 'react-widgets/lib/Combobox'

export default class EditCarDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entity : {},
            availablePersons : [],
            availableAccidents : []

        }
        this.updateEntity = this.updateEntity.bind(this);
    }

    componentDidMount() {
        this.loadPersons();
        this.loadAccidents();

    }

    componentWillReceiveProps(nextProps, nextContext) {
        const value = nextProps.value;
        if (value === null || value === undefined) {
            let entityPerson = this.state.availablePersons ? this.state.availablePersons[0] : null;
            let entityAccident = this.state.availableAccidents ? this.state.availableAccidents[0] : null;
            this.updateEntity('person', entityPerson, 'accident', entityAccident);
        }
    }

    loadPersons() {
        getPersons().then(persons => {
            this.setState({availablePersons : persons});
        })
    }

    loadAccidents() {
        getAccidents().then(accidents => {
            this.setState({availableAccidents : accidents});
        })
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

    updateEntity(propName, newVal, propName2, newVal2) {
        this.setState({entity: Object.assign({}, this.state.entity, {[propName]: newVal}, {[propName2]: newVal2})});
    }

    render() {
        const {show, onHide, title, value} = this.props;

        let PersonItem = ({item}) => (
            <span>
                <strong>{item.idPerson}</strong>
            </span>
        );

        let AccidentItem = ({item}) => (
            <span>
                <strong>{item.codeAccident}</strong>
            </span>
        );
        let availablePersons = this.state.availablePersons;
        let availableAccidents = this.state.availableAccidents;
        let entity = this.state.entity;
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
                          <ControlLabel>{'VIN'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.vin : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('vin', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Гос.номер'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.governmentNumber : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('governmentNumber', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Марка'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.car_brand : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('car_brand', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Модель'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.model : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('model', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Категория'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.category : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('category', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Цвет'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.color : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('color', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Код человека'}</ControlLabel>
                          <Combobox data={availablePersons}
                                    defaultValue={value ? value.person : (availablePersons ? availablePersons[0] : null)}
                                    itemComponent={PersonItem}
                                    textField='idPerson'
                                    value={entity.person}
                                    onChange={item => {
                                        this.updateEntity('person', item);
                                    }}/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Код ДТП'}</ControlLabel>
                          <Combobox data={availableAccidents}
                                    defaultValue={value ? value.person : (availableAccidents ? availableAccidents[0] : null)}
                                    itemComponent={AccidentItem}
                                    textField='codeAccident'
                                    value={entity.accident}
                                    onChange={item => {
                                        this.updateEntity('accident', item);
                                    }}/>
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
