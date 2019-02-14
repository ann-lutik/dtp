import React, { Component } from 'react';
import {OverlayTrigger, PageHeader, Table, Tooltip} from "react-bootstrap";
import Car from './car';
import {
    getCars,
    addCar,
    updateCar,
    deleteCar } from '../../routine/utils/services/car-service'

import EditCarDialog from './edit-car-dialog'
import ConfirmDialog from '../confirm-dialog'
import {AddBtnStyle, PageHeaderStyle} from '../fast-styles'

class CarList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentEditCar : null,
            currentDeleteCar : null,
            cars: [],
            showCreateDialog : false,
            showEditDialog : false,
            showDeleteDialog : false};
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        getCars()
            .then(data => {
                let x = Object.assign({}, this.state.cars, {data})
                this.setState(
                    {cars : x.data });
            });
    }

    getDeleteMessage() {
        let car = this.state.currentDeleteCar;
        if (car === null || car === undefined)
            return "Вы действительно хотите удалить выбранный элемент?";
        return "Вы действительно хотите удалить автомобиль '" + car.codeCar + "' владельцем которого является '"
        + car.person.idPerson + "' побывавший в ДТП '"
        + car.accident.codeAccident + "'?";
    }

    render() {
        const AddTooltip = (
            <Tooltip id="showCarsTooltip">
                Добавить автомобиль
            </Tooltip>
        );

        return (
            <div>
                <PageHeader style={PageHeaderStyle}>
                    Автомобили
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
                        <th>VIN</th>
                        <th>Гос.номер</th>
                        <th>Марка</th>
                        <th>Модель</th>
                        <th>Категория</th>
                        <th>Цвет</th>
                        <th>Код человека</th>
                        <th>Код ДТП</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.cars.map(car => {
                        return <Car key={car.id} car={car}
                                            onEdit={e => {
                                                this.setState({currentEditCar : car, showEditDialog : true});
                                            } }
                                            onDelete={e => {
                                                this.setState({currentDeleteCar : car, showDeleteDialog : true});
                                            } }/>
                    })
                }
                </tbody>
            </Table>
                <EditCarDialog title={'Добавить автомобиль'}
                                       show={this.state.showCreateDialog}
                                       onConfirm={(entity) => {
                                           addCar(entity).then(() => {
                                               this.loadData();
                                               this.setState({showCreateDialog: false});
                                           });
                                       }}
                                       onHide={() => {
                                           this.setState({showCreateDialog: false});
                                       }}/>

                <EditCarDialog title={'Редактировать автомобиль'}
                                       show={this.state.showEditDialog}
                                       value={this.state.currentEditCar}
                                       onConfirm={(entity) => {
                                           updateCar(entity).then(() => {
                                               this.loadData();
                                               this.setState({showEditDialog: false});
                                           });
                                       }}
                                       onHide={() => {
                                           this.setState({showEditDialog: false});
                                       }}/>

                <ConfirmDialog title={'Удалить автомобиль'}
                               message={this.getDeleteMessage()}
                                show={this.state.showDeleteDialog}
                               onConfirm={() => {
                                   deleteCar(this.state.currentDeleteCar.id).then(() => {
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

export default CarList;
