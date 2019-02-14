import React, { Component } from 'react';
import {OverlayTrigger, PageHeader, Table, Tooltip} from "react-bootstrap";
import RoadAccidentParticipant  from './road-accident-participant'
import {
    getRoadAccidentParticipants ,
    addRoadAccidentParticipant ,
    updateRoadAccidentParticipant ,
    deleteRoadAccidentParticipant  } from '../../routine/utils/services/road-accident-participant-service'

import EditRoadAccidentParticipantDialog from './edit-road-accident-participant-dialog'
import ConfirmDialog from '../confirm-dialog'
import {AddBtnStyle, PageHeaderStyle} from '../fast-styles'

class RoadAccidentParticipantList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentEditRoadAccidentParticipant : null,
            currentDeleteRoadAccidentParticipant : null,
            roadAccidentParticipants: [],
            showCreateDialog : false,
            showEditDialog : false,
            showDeleteDialog : false};
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        getRoadAccidentParticipants()
            .then(data => {
                let x = Object.assign({}, this.state.roadAccidentParticipants, {data})
                this.setState(
                    {roadAccidentParticipants : x.data });
            });
    }

    getDeleteMessage() {
        let roadAccidentParticipant = this.state.currentDeleteRoadAccidentParticipant;
        if (roadAccidentParticipant === null || roadAccidentParticipant === undefined)
            return "Вы действительно хотите удалить выбранный элемент?";
        return "Вы действительно хотите удалить участника ДТП '"
         + roadAccidentParticipant.code_road_accident_participant +  "'?";
    }

    render() {
        const AddTooltip = (
            <Tooltip id="showCarsTooltip">
                Добавить участника ДТП
            </Tooltip>
        );

        return (
            <div>
                <PageHeader style={PageHeaderStyle}>
                    Участники ДТП
                    <OverlayTrigger placement="right" overlay={AddTooltip}>
                        <button type="button" style={AddBtnStyle} className="btn btn-default" onClick={() => {this.setState({showCreateDialog: true});}}>
                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                        </button>
                    </OverlayTrigger>
                </PageHeader>

            <Table striped bordered condensed hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Номер водительского удостоверения</th>
                        <th>Вид участия</th>
                        <th>Водительский стаж</th>
                        <th>Вина</th>
                        <th>Код человека</th>
                        <th>Код ДТП</th>
                        <th>Код нарушения</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.roadAccidentParticipants.map(roadAccidentParticipant => {
                        return <RoadAccidentParticipant key={roadAccidentParticipant.code_road_accident_participant} roadAccidentParticipant={roadAccidentParticipant}
                                            onEdit={e => {
                                                this.setState({currentEditRoadAccidentParticipant : roadAccidentParticipant, showEditDialog : true});
                                            } }
                                            onDelete={e => {
                                                this.setState({currentDeleteRoadAccidentParticipant : roadAccidentParticipant, showDeleteDialog : true});
                                            } }/>
                    })
                }
                </tbody>
            </Table>
                <EditRoadAccidentParticipantDialog title={'Добавить участника ДТП'}
                                       show={this.state.showCreateDialog}
                                       onConfirm={(entity) => {
                                            addRoadAccidentParticipant(entity).then(() => {
                                            this.loadData();
                                            this.setState({showCreateDialog: false});
                                           });
                                       }}
                                       onHide={() => {
                                           this.setState({showCreateDialog: false});
                                       }}/>

                <EditRoadAccidentParticipantDialog title={'Редактировать участника ДТП'}
                                       show={this.state.showEditDialog}
                                       value={this.state.currentEditRoadAccidentParticipant}
                                       onConfirm={(entity) => {
                                            updateRoadAccidentParticipant(entity).then(() => {
                                            this.loadData();
                                            this.setState({showEditDialog: false});
                                           });
                                       }}
                                       onHide={() => {
                                           this.setState({showEditDialog: false});
                                       }}/>

                <ConfirmDialog title={'Удалить участника ДТП'}
                               message={this.getDeleteMessage()}
                                show={this.state.showDeleteDialog}
                               onConfirm={() => {
                                    deleteRoadAccidentParticipant(this.state.currentDeleteRoadAccidentParticipant.id).then(() => {
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

export default RoadAccidentParticipantList;
