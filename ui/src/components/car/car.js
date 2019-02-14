import React, { Component } from 'react';
import {EditTooltip, DeleteTooltip} from "../tooltips";
import {OverlayTrigger} from "react-bootstrap";


class Car extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const car = this.props.car;
        return (
            <tr key={car.codeCar}>
                <td>{car.vin}</td>
                <td>{car.governmentNumber}</td>
                <td>{car.car_brand}</td>
                <td>{car.model}</td>  
                <td>{car.category}</td>
                <td>{car.color}</td>
                <td>{car.person.idPerson}</td>
                <td>{car.accident.codeAccident}</td>
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

export default Car;
