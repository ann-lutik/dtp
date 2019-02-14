import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import MenuItem from "react-bootstrap/es/MenuItem";

export default class AppHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let userName = this.props.username;
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/accidents">ДТП</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem href="/accidents">ДТП</NavItem>
                        <NavItem href="/roadAccidentParticipants">Участники ДТП</NavItem>
                        <MenuItem href="/cars">Автомобили</MenuItem>
                        <NavItem href="/persons">Люди</NavItem>
                        <NavItem href="/offences">Нарушения</NavItem>
                    </Nav>

                    <Nav pullRight>
                        <NavItem data-toggle="tooltip" title="На страницу аутентификации" onClick={this.props.logoutHandler}>
                            <label>Выйти</label>
                            <span className="glyphicon glyphicon-log-out" aria-hidden="true"></span></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

