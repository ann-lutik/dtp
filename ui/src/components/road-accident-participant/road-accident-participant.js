import React, { Component } from 'react';
import {EditTooltip, DeleteTooltip} from "../tooltips";
import {OverlayTrigger} from "react-bootstrap";

class RoadAccidentParticipant extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const roadAccidentParticipant = this.props.roadAccidentParticipant;
        return (
            <tr key={roadAccidentParticipant.code_road_accident_participant}>
                <td>{roadAccidentParticipant.driversLicenseNumber}</td>
                <td>{roadAccidentParticipant.typeParticipation}</td>
                <td>{roadAccidentParticipant.drivingExperience}</td>
                <td>{roadAccidentParticipant.isGuilty}</td>  
                <td>{roadAccidentParticipant.person.idPerson}</td>
                <td>{roadAccidentParticipant.accident.codeAccident}</td>
                <td>{roadAccidentParticipant.offence.codeOffence}</td>
                <td>
                    <div className="btn-group">
                        <OverlayTrigger placement="top" overlay={EditTooltip}>
                            <button type="button" className="btn btn-primary" onClick={this.props.onEdit}>
                                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                            </button>
                        </OverlayTrigger>

                        <OverlayTrigger placement="top" overlay={DeleteTooltip}>
                            <button type="button" className="btn btn-danger" onClick={this.props.onDelete}>
                                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                            </button>
                        </OverlayTrigger>
                    </div>
                </td>
            </tr>
        );
    }
}

export default RoadAccidentParticipant;
