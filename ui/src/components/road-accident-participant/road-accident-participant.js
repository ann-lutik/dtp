import React, {Component} from 'react';
import {DeleteTooltip, EditTooltip} from "../tooltips";
import {OverlayTrigger} from "react-bootstrap";

class RoadAccidentParticipant extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const roadAccidentParticipant = this.props.roadAccidentParticipant;
        return (
            <tr key={roadAccidentParticipant.codeRoadAccidentParticipant}>
                <td>{roadAccidentParticipant.codeRoadAccidentParticipant}</td>
                <td>{roadAccidentParticipant.driversLicenseNumber}</td>
                <td>{roadAccidentParticipant.typeParticipation}</td>
                <td>{roadAccidentParticipant.drivingExperience}</td>
                <td>{roadAccidentParticipant.isGuilty}</td>
                <td>{roadAccidentParticipant.person != null ? roadAccidentParticipant.person.idPerson : ""}</td>
                <td>{roadAccidentParticipant.accident != null ? roadAccidentParticipant.accident.codeAccident : ""}</td>
                <td>{roadAccidentParticipant.offence != null ? roadAccidentParticipant.offence.codeOffence : ""}</td>
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
