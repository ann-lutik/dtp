import React, { Component } from 'react';
import {Form, ControlLabel, FormControl, FormGroup, Button} from 'react-bootstrap'
import {getAccessToken, tryLogin} from "../../routine/utils/services/login-service";
import './login-style.css'

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.pushHistory = this.pushHistory.bind(this);
        this.state = { login : "admin", password : "admin", failed : false};
    }

    componentDidMount() {
        let accessToken = getAccessToken();
        if (accessToken) {
            this.pushHistory("/");
        }
    }

    pushHistory(val) {
        this.props.history.push(val);
    }

    handleLogin(login, password, callback) {



      //  let g= tryLogin({login, password}, (isSuccess) => callback(isSuccess));
      //  if (g) {
            //   window.location.href = "/";
            //    this.pushHistory("/carBodyTypes");
     //   }
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        tryLogin(this.state.login, this.state.password,(success) => {
            if (success) {
                this.pushHistory("/");
                this.setState({failed : false});
            }
            else {
                this.setState({failed : true});
            }
        });

      /* this.props.loginRequest(
            {
                login : this.state.login,
                password : this.state.password
            },
            (isSuccess) => {
                if (isSuccess)
                    this.pushHistory("/");
                else {
                    this.setState({failed : true});
                }
            });  */
    }

    render() {
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup bsSize='medium'>
                        <ControlLabel>Логин</ControlLabel>
                        <FormControl placeholder="Введите логин"
                                     onChange={(event) => {
                                         this.setState({login : event.target.value});
                                     }}/>
                    </FormGroup>

                    <FormGroup bsSize='medium'>
                        <ControlLabel>Пароль</ControlLabel>
                        <FormControl placeholder="Введите пароль"
                                     type="password"
                                     onChange={(event) => {
                                         this.setState({password : event.target.value});
                                     }}/>
                    </FormGroup>
                    { this.state.failed ? <FormControl.Static >Неверный логин или пароль.</FormControl.Static> : null }
                    <Button block bsSize='medium' type="submit">Войти</Button>
                </Form>
            </div>
        );
    }
}

export default LoginComponent;