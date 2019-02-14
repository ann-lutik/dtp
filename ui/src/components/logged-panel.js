import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import CarList from './car/car-list';
import PersonList from './person/person-list'
import OffenceList from './offence/offence-list'
import AccidentList from './accident/accident-list'
import RoadAccidentParticipantList from './road-accident-participant/road-accident-participant-list'
import {logout} from "../routine/utils/services/login-service";

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
                        <Route exact path="/cars" component={CarList}/>
                        <Route exact path="/roadAccidentParticipants" component={RoadAccidentParticipantList}/>
                        <Route exact path="/accidents" component={AccidentList}/>
                        <Route exact path="/persons" component={PersonList}/>
                        <Route exact path="/offences" component={OffenceList}/>
                        <Route path="/" exact component={AccidentList}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );

    }
}

export default LoggedPanelComponent;