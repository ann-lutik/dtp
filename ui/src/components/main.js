import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../components/main.css'

import {logout} from "../routine/utils/services/login-service";

import LoggedPanelComponent from './logged-panel'

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        logout();
    }

    render() {
        // if (this.state.isLoggedIn) {
        return (
            <div className='DarkDiv'>
                <BrowserRouter>
                    <Switch>
                        <Route component={LoggedPanelComponent}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
        //   }
        // else {
        //     return ( <LoginComponent loginRequest={this.handleLogin}/>); }

    }
}

export default MainComponent;