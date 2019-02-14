import React, { Component } from 'react';
import {OverlayTrigger, PageHeader, Table, Tooltip} from "react-bootstrap";
import Offence from './offence';
import {
    getOffences,
    addOffence,
    updateOffence,
    deleteOffence  } from '../../routine/utils/services/offence-service'

import EditOffenceDialog from './edit-offence-dialog'
import ConfirmDialog from '../confirm-dialog'
import {AddBtnStyle, PageHeaderStyle} from "../fast-styles";

class OffenceList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentEditOffence : null,
            currentDeleteOffence : null,
            offences: [],
            showCreateDialog : false,
            showEditDialog : false,
            showDeleteDialog : false};
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        getOffences()
            .then(data => {
                let x = Object.assign({}, this.state.offences, {data})
                this.setState(
                    {offences : x.data });
            });
    }

    getDeleteMessage() {
        let offence = this.state.currentDeleteOffence;
        if (offence === null || offence === undefined)
            return "Вы действительно хотите удалить выбранный элемент?";
        return 'Вы действительно хотите удалить нарушение "' + offence.nameOffence + 
         + '"? ';
    }

    render() {
        const AddTooltip = (
            <Tooltip id="showCarsTooltip">
                Добавить нарушение
            </Tooltip>
        );

        return (
            <div>
                <PageHeader style={PageHeaderStyle}>
                    Нарушения
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
                            <th>Название нарушения</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.offences.map(offence => {
                            return <Offence key={offence.codeOffence} offence={offence}
                                                onEdit={e => {
                                                    this.setState({currentEditOffence : offence, showEditDialog : true});
                                                } }
                                                onDelete={e => {
                                                    this.setState({currentDeleteOffence : offence, showDeleteDialog : true});
                                                } }/>
                        })
                    }
                    </tbody>
                </Table>

                <EditOffenceDialog title={'Добавить информацию о нарушении'}
                                       show={this.state.showCreateDialog}
                                       onConfirm={(entity) => {
                                           addOffence(entity).then(() => {
                                               this.loadData();
                                               this.setState({showCreateDialog: false});
                                           });
                                       }}
                                       onHide={() => {
                                           this.setState({showCreateDialog: false});
                                       }}/>

                <EditOffenceDialog title={'Редактирование информации о нарушении'}
                                       show={this.state.showEditDialog}
                                       value={this.state.currentEditOffence}
                                       onConfirm={(entity) => {
                                           updateOffence(entity).then(() => {
                                               this.loadData();
                                               this.setState({showEditDialog: false});
                                           });
                                       }}
                                       onHide={() => {
                                           this.setState({showEditDialog: false});
                                       }}/>

                <ConfirmDialog title={'Удалить нарушение'}
                               message={this.getDeleteMessage()}
                                show={this.state.showDeleteDialog}
                               onConfirm={() => {
                                   deleteOffence(this.state.currentDeleteOffence.codeOffence).then(() => {
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

export default OffenceList;
