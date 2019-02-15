import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import CarList from './car/car-list';
import PersonList from './person/person-list'
import OffenceList from './offence/offence-list'
import AccidentList from './accident/accident-list'
import RoadAccidentParticipantList from './road-accident-participant/road-accident-participant-list'
import {getCurrentUsername, logout} from "../routine/utils/services/login-service";

import AppHeader from './app-header'

import './logged-panel'

class LoggedPanelComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        let currentUsername = getCurrentUsername();
        this.setState({username: currentUsername});
    }

    handleLogout() {
        logout();
    }

    render() {
        // if (this.state.isLoggedIn) {
        return (
            <div>
                <AppHeader logoutHandler={this.handleLogout} username={this.state.username}/>
                <BrowserRouter>
                    <Switch>
                        <Route exact component={CarList}/>
                        <Route exact component={RoadAccidentParticipantList}/>
                        <Route exact component={AccidentList}/>
                        <Route exact component={PersonList}/>
                        <Route exact component={OffenceList}/>
                        <Route exact component={AccidentList}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );

    }
}

export default LoggedPanelComponent;