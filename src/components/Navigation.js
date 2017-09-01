import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar inverse>
                <Button bsStyle="link">
                    <NavLink to="/">Users</NavLink>
                </Button>
                <Button bsStyle="link">
                    <NavLink to="/add-user">Add user</NavLink>
                </Button>
            </Navbar>
        )
    }
}

export default Navigation;