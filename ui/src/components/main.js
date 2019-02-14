import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {Router, Route, BrowserRouter, Switch} from 'react-router-dom';
import LoginComponent from './security/login'
import '../components/main.css'

import {tryLogin, logout} from "../routine/utils/services/login-service";

import AppHeader from './app-header'
import {getAccessToken} from "../routine/utils/services/login-service";

import LoggedPanelComponent from './logged-panel'

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : false
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        let accessToken = getAccessToken();
        this.setState({isLoggedIn: accessToken ? true : false});
    }

    handleLogin({login, password}, callback){
        let g= tryLogin({login, password}, (isSuccess) => callback(isSuccess));
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
                            <Route exact path = "/signin"
                                   render = {props => (
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