import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Table } from 'react-bootstrap';
import Navigation from './Navigation';

const User = ({ user }) => {
    let style = {
        display: "block",
        fontSize: 18,
        color: "red",
        marginBottom: 10
    };
    return (
        <div>
            <Navigation />
            <NavLink style={style} to="/">назад</NavLink>
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phone</th>
                    <th>address</th>
                    <th>birthday</th>
                </tr>
                </thead>
                <tbody>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>{user.birthDay}.{user.birthMonth}.{user.birthYear}</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === Number(ownProps.match.params.id))
    };
};

export default connect(mapStateToProps)(User);