import React from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/UsersAction";
import { NavLink } from "react-router-dom";
import { Table, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import Navigation from './Navigation';

class User extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.userId);
    }

    renderUser(){
        let { user } = this.props;
        let style = {
            display: "block",
            fontSize: 18,
            color: "red",
            marginBottom: 10
        };
        if(this.props.status) {
            return (
                <Col sm={5}>
                    <ListGroup>
                        <ListGroupItem bsStyle="danger">Клиент не найден!!!</ListGroupItem>
                    </ListGroup>
                </Col>
            )
        }else{
            return (
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
            )
        }

    }

    render() {
        return (
            <row>
                <Navigation />
                {this.renderUser()}
            </row>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (id) => dispatch(getUser(id)),
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user.user,
        status: state.user.failure,
        userId: ownProps.match.params.id
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);