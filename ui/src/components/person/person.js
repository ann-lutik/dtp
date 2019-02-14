import React, { Component } from 'react';
import {EditTooltip, DeleteTooltip} from "../tooltips";
import {OverlayTrigger} from "react-bootstrap";

class Person extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const person = this.props.person;
        return (
            <tr key={person.idPerson}>
                <td>{person.name}</td>
                <td>{person.surname}</td>
                <td>{person.middleName}</td>
                <td>{person.dateBirth}</td>
                <td>{person.addressPerson}</td>
                <td>{person.role}</td>
                <td>{person.password}</td>
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

export default Person;
