import React, { Component } from 'react';
import {OverlayTrigger, PageHeader, Table, Tooltip} from "react-bootstrap";
import Person from './person';
import {
    getPersons,
    addPerson,
    updatePerson,
    deletePerson  } from '../../routine/utils/services/person-service'

import EditPersonDialog from './edit-person-dialog'
import ConfirmDialog from '../confirm-dialog'
import {AddBtnStyle, PageHeaderStyle} from "../fast-styles";

class PersonList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentEditPerson : null,
            currentDeletePerson : null,
            persons: [],
            showCreateDialog : false,
            showEditDialog : false,
            showDeleteDialog : false};
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        getPersons()
            .then(data => {
                let x = Object.assign({}, this.state.persons, {data})
                this.setState(
                    {persons : x.data });
            });
    }

    getDeleteMessage() {
        let person = this.state.currentDeletePerson;
        if (person === null || person === undefined)
            return "Вы действительно хотите удалить выбранный элемент?";
        return 'Вы действительно хотите удалить человека "' + person.name + 
        '" "' + person.surname + '" "' + person.middleName +
         + '"? ';
    }

    render() {
        const AddTooltip = (
            <Tooltip id="showCarsTooltip">
                Добавить человека
            </Tooltip>
        );

        return (
            <div>
                <PageHeader style={PageHeaderStyle}>
                    Люди
                    <OverlayTrigger placement="right" overlay={AddTooltip}>
                        <button style={AddBtnStyle} type="button" className="btn btn-default" onClick={() => {this.setState({showCreateDialog: true});}}>
                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                        </button>
                    </OverlayTrigger>
                </PageHeader>

                <Table striped bordered condensed hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th className="col-md-1">Имя</th>
                            <th className="col-md-1">Фамилия</th>
                            <th className="col-md-1">Отчество</th>
                            <th className="col-md-1">Дата рождения</th>
                            <th className="col-md-4">Адрес</th>
                            <th className="col-md-1">Роль</th>
                            <th className="col-md-1">Пароль</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.persons.map(person => {
                            return <Person key={person.idPerson} person={person}
                                                onEdit={e => {
                                                    this.setState({currentEditPerson : person, showEditDialog : true});
                                                } }
                                                onDelete={e => {
                                                    this.setState({currentDeletePerson : person, showDeleteDialog : true});
                                                } }/>
                        })
                    }
                    </tbody>
                </Table>

                <EditPersonDialog title={'Добавить человека'}
                                       show={this.state.showCreateDialog}
                                       onConfirm={(entity) => {
                                           addPerson(entity).then(() => {
                                               this.loadData();
                                               this.setState({showCreateDialog: false});
                                           });
                                       }}
                                       onHide={() => {
                                           this.setState({showCreateDialog: false});
                                       }}/>

                <EditPersonDialog title={'Редактирование информации о человеке'}
                                       show={this.state.showEditDialog}
                                       value={this.state.currentEditPerson}
                                       onConfirm={(entity) => {
                                           updatePerson(entity).then(() => {
                                               this.loadData();
                                               this.setState({showEditDialog: false});
                                           });
                                       }}
                                       onHide={() => {
                                           this.setState({showEditDialog: false});
                                       }}/>

                <ConfirmDialog title={'Удалить человека'}
                               message={this.getDeleteMessage()}
                                show={this.state.showDeleteDialog}
                               onConfirm={() => {
                                   deletePerson(this.state.currentDeletePerson.id).then(() => {
                                       this.loadData();
                                       this.setState({showDeleteDialog : false});
                                   });
                               }}
                               onHide={() => {
                                   this.setState({showDeleteDialog: false});
                               }}/>
            </div>
        );
    }
}

export default PersonList;
