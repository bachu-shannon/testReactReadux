import React from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/UsersAction";
import { NavLink } from "react-router-dom";
import { Table, Col } from 'react-bootstrap';
import Navigation from './Navigation';

class User extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.userId);
    }

    render() {
        let style = {
            display: "block",
            fontSize: 18,
            color: "red",
            marginBottom: 10
        };
        let { user } = this.props;
        return (
            <row>
                <Navigation />
                <Col sm={12}>
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
                </Col>
            </row>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (id) => dispatch(getUser(id)),
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
        userId: ownProps.match.params.id
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);