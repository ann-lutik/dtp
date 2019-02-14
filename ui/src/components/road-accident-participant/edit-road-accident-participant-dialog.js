import React, { Component } from 'react';
import { FormGroup, Form, ControlLabel, FormControl, Modal } from "react-bootstrap";
import { getAccidents } from '../../routine/utils/services/accident-service'
import { getPersons} from '../../routine/utils/services/person-service'
import { getOffences} from '../../routine/utils/services/offence-service'
import Combobox from 'react-widgets/lib/Combobox'

export default class EditCarDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entity : {},
            availablePersons : [],
            availableAccidents : [],
            availableOffences : []

        }
        this.updateEntity = this.updateEntity.bind(this);
    }

    componentDidMount() {
        this.loadPersons();
        this.loadAccidents();
        this.loadOffences();

    }

    componentWillReceiveProps(nextProps, nextContext) {
        const value = nextProps.value;
        if (value === null || value === undefined) {
            let entityPerson = this.state.availablePersons ? this.state.availablePersons[0] : null;
            let entityAccident = this.state.availableAccidents ? this.state.availableAccidents[0] : null;
            let entityOffence = this.state.availableOffences ? this.state.availableOffences[0] : null;
            this.updateEntity('person', entityPerson, 'accident', entityAccident, 'offence', entityOffence);
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

    loadOffences() {
        getOffences().then(offences => {
            this.setState({availableOffences : offences});
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

    updateEntity(propName, newVal, propName2, newVal2, propName3, newVal3) {
        this.setState({entity: Object.assign({}, this.state.entity, {[propName]: newVal}, {[propName2]: newVal2} , {[propName3]: newVal3})});
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

        let OffenceItem = ({item}) => (
            <span>
                <strong>{item.codeOffence}</strong>
            </span>
        );
        let availablePersons = this.state.availablePersons;
        let availableAccidents = this.state.availableAccidents;
        let availableOffences = this.state.availableOffences;
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
                          <ControlLabel>{'Номер водительского удостоверения'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.driversLicenseNumber : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('driversLicenseNumber', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Вид участия'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.typeParticipation : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('typeParticipation', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Водительский стаж'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.drivingExperience : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('drivingExperience', newVal.target.value);
                                       }}/>
                          <FormControl.Feedback/>
                      </FormGroup>

                      <FormGroup>
                          <ControlLabel>{'Виновен ли?'}</ControlLabel>
                          <FormControl type="text"
                                       defaultValue={value ? value.isGuilty : null}
                                       onChange={(newVal) => {
                                           this.updateEntity('isGuilty', newVal.target.value);
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

                      <FormGroup>
                          <ControlLabel>{'Код нарушения'}</ControlLabel>
                          <Combobox data={availableOffences}
                                    defaultValue={value ? value.person : (availableOffences ? availableOffences[0] : null)}
                                    itemComponent={OffenceItem}
                                    textField='codeOffence'
                                    value={entity.offence}
                                    onChange={item => {
                                        this.updateEntity('offence', item);
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
