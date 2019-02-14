import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginComponent from './security/login'
import '../components/main.css'

import {getAccessToken, logout, tryLogin} from "../routine/utils/services/login-service";

import LoggedPanelComponent from './logged-panel'

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        let accessToken = getAccessToken();
        this.setState({isLoggedIn: !!accessToken});
    }

    handleLogin({login, password}, callback) {
        let g = tryLogin({login, password}, (isSuccess) => callback(isSuccess));
        if (g) {
            //   window.location.href = "/";
            //    this.pushHistory("/carBodyTypes");
        }
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
                        <Route exact path="/login"
                               render={props => (
                                   <LoginComponent {...props} loginRequest={this.handleLogin}/>
                               )}/>
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