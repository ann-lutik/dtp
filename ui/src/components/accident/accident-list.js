import React, { Component } from 'react';
import {OverlayTrigger, PageHeader, Table, Tooltip} from "react-bootstrap";
import Accident from './accident';
import {
    getAccidents,
    addAccident,
    updateAccident,
    deleteAccident } from '../../routine/utils/services/accident-service'

import EditAccidentDialog from './edit-accident-dialog'
import ConfirmDialog from '../confirm-dialog'
import {AddBtnStyle, PageHeaderStyle} from "../fast-styles";

class AccidentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentEditAccident : null,
            currentDeleteAccident : null,
            accidents: [],
            showCreateDialog : false,
            showEditDialog : false,
            showDeleteDialog : false};
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        getAccidents()
            .then(data => {
                let x = Object.assign({}, this.state.accidents, {data})
                this.setState(
                    {accidents : x.data });
            });
    }

    getDeleteMessage() {
        let accident = this.state.currentDeleteAccident;
        if (accident === null || accident === undefined)
            return "Вы действительно хотите удалить выбранный элемент?";
        return 'Вы действительно хотите удалить ДТП "' + accident.codeAccident
         + '"? ';
    }

    render() {
        const AddTooltip = (
            <Tooltip id="showCarsTooltip">
                Добавить ДТП
            </Tooltip>
        );

        return (
            <div>
                <PageHeader style={PageHeaderStyle}>
                    ДТП
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
                            <th>Дата ДТП</th>
                            <th>Тип ДТП</th>
                            <th>Погибло</th>
                            <th>Пострадало</th>
                            <th>Погодные условия</th>
                            <th>Вид покрытия</th>
                            <th>Вид сооружения дороги</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.accidents.map(accident => {
                            return <Accident key={accident.codeAccident} accident={accident}
                                                onEdit={e => {
                                                    this.setState({currentEditAccident : accident, showEditDialog : true});
                                                } }
                                                onDelete={e => {
                                                    this.setState({currentDeleteAccident : accident, showDeleteDialog : true});
                                                } }/>
                        })
                    }
                    </tbody>
                </Table>

                <EditAccidentDialog title={'Добавить ДТП'}
                                       show={this.state.showCreateDialog}
                                       onConfirm={(entity) => {
                                           addAccident(entity).then(() => {
                                               this.loadData();
                                               this.setState({showCreateDialog: false});
                                           });
                                       }}
                                       onHide={() => {
                                           this.setState({showCreateDialog: false});
                                       }}/>

                <EditAccidentDialog title={'Редактирование информации о ДТП'}
                                       show={this.state.showEditDialog}
                                       value={this.state.currentEditAccident}
                                       onConfirm={(entity) => {
                                           updateAccident(entity).then(() => {
                                               this.loadData();
                                               this.setState({showEditDialog: false});
                                           });
                                       }}
                                       onHide={() => {
                                           this.setState({showEditDialog: false});
                                       }}/>

                <ConfirmDialog title={'Удалить ДТП'}
                               message={this.getDeleteMessage()}
                                show={this.state.showDeleteDialog}
                               onConfirm={() => {
                                   deleteAccident(this.state.currentDeleteAccident.codeAccident).then(() => {
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

export default AccidentList;
