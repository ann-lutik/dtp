import React, { Component } from 'react';
import {EditTooltip, DeleteTooltip} from "../tooltips";
import {OverlayTrigger} from "react-bootstrap";

class Offence extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const offence = this.props.offence;
        return (
            <tr key={offence.codeOffence}>
                <td>{offence.nameOffence}</td>

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

export default Offence;