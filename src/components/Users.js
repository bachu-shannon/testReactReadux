import React from "react";
import { connect } from 'react-redux';
import { getUsers } from "../actions/UsersAction";
import { NavLink } from "react-router-dom";
import Navigation from './Navigation';
import { Table, Button, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { setCurrentPage } from "../actions/PaginationAction";
import Filter from "./Filter";

class Users extends React.Component {
    componentDidMount() {
        const _limit = this.props.pagination.limit;
        const _start = this.props.pagination.currentPage * _limit;
        this.props.getUsers(this.props.filterUser, _start, _limit);
    }

    componentWillReceiveProps(nextProps) {
        const _limit = nextProps.pagination.limit;
        const _start = nextProps.pagination.currentPage * _limit;
        if(nextProps.pagination.currentPage !== this.props.pagination.currentPage) {
            this.props.getUsers(nextProps.filterUser, _start, _limit);
        }
        if(nextProps.filterUser !== this.props.filterUser) {
            this.props.getUsers(nextProps.filterUser, _start, _limit);
        }
    }

    handleNextPageClick() {
        this.props.setCurrentPage(this.props.pagination.currentPage + 1);
    }

    handlePrevPageClick() {
        const pageNumber = (this.props.pagination.currentPage - 1) >= 0 ? this.props.pagination.currentPage - 1 : 0;
        this.props.setCurrentPage(pageNumber);
    }

    renderUsers() {
        if (this.props.users.failure) {
            return (
                <Col sm={5}>
                    <ListGroup>
                        <ListGroupItem bsStyle="danger">Клиенты не найдены!!!</ListGroupItem>
                    </ListGroup>
                </Col>
            )
        }else{
            return (
                <Col sm={12}>
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th></th>
                            <th><Filter /></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
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
                        {this.props.users.users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>
                                        <NavLink
                                            style={{color: "blue"}}
                                            to={`/users/${user.id}`}
                                        >
                                            {user.name}
                                        </NavLink>
                                    </td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address}</td>
                                    <td>{user.birthDay}.{user.birthMonth}.{user.birthYear}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </Table>

                    {/* Так как API не предоставляет возможности
                     получения всех страниц для отрисовки полноценной пагинации,
                     вынужлен делать такую реализацию */}
                    <Button bsStyle="primary" onClick={this.handlePrevPageClick.bind(this)}>Prev</Button>
                    <Button>
                        {
                            this.props.pagination.currentPage + 1
                        }
                    </Button>
                    <Button bsStyle="primary" onClick={this.handleNextPageClick.bind(this)}>Next</Button>
                </Col>
            )
        }
    }

    render() {
        return (
            <row>
                <Navigation />
                {this.renderUsers()}
            </row>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (name, start, limit) => dispatch(getUsers(name, start, limit)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPage(pageNumber))
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.users,
        filterUser: state.filterUser,
        pagination: state.pagination
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);