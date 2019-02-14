import React, { Component } from 'react';
import {EditTooltip, DeleteTooltip} from "../tooltips";
import {OverlayTrigger} from "react-bootstrap";

class Accident extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const accident = this.props.accident;
        return (
            <tr key={accident.codeAccident}>
                <td>{accident.dateAccident}</td>
                <td>{accident.typeAccident}</td>
                <td>{accident.deathToll}</td>
                <td>{accident.numberOfVictims}</td>
                <td>{accident.weather}</td>
                <td>{accident.typeOfCoating}</td>
                <td>{accident.viewRoadConstruction}</td>
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

export default Accident;
