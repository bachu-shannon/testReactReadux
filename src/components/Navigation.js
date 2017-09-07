import React from 'react';
import { Navbar, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink,  } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Collapse>
                    <Col sm={12}>
                        <Navbar.Brand>
                            <NavLink to="/">Users</NavLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <NavLink to="/add-user">Add user</NavLink>
                        </Navbar.Brand>
                    </Col>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;