import React from "react";
import Navigation from './Navigation';
import { Form, FormGroup, FormControl, Button, Col, ControlLabel, Well } from "react-bootstrap";
import { connect } from 'react-redux';
import { addUser } from "../actions/AddAction";

class Add extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        let newUser = {
            name: this.name.value,
            gender: this.gender.value,
            birthYear: Number(this.birthYear.value),
            birthMonth: Number(this.birthMonth.value),
            birthDay: Number(this.birthDay.value),
            phone: this.phone.value,
            email: this.email.value,
            address: this.address.value,
            description: this.description.value,
        };
        this.props.addUser(newUser);
    }

    componentDidUpdate() {
        console.log(this.props.newUser);
    }

    render() {
        return (
            <div>
                <Navigation />
                {this.props.newUser.name} {this.props.success}
                <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            name
                        </Col>
                        <Col sm={4}>
                            <FormControl
                                type="text"
                                placeholder="Enter name"
                                inputRef={ref => { this.name = ref; }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            gender
                        </Col>
                        <Col sm={4}>
                            <FormControl
                                type="text"
                                placeholder="Enter gender"
                                inputRef={ref => { this.gender = ref; }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            birthYear
                        </Col>
                        <Col sm={4}>
                            <FormControl
                                type="text"
                                placeholder="Enter birthYear"
                                inputRef={ref => { this.birthYear = ref; }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            birthMonth
                        </Col>
                        <Col sm={4}>
                            <FormControl
                                type="text"
                                placeholder="Enter birthMonth"
                                inputRef={ref => { this.birthMonth = ref; }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            birthDay
                        </Col>
                        <Col sm={4}>
                            <FormControl
                                type="text"
                                placeholder="Enter birthDay"
                                inputRef={ref => { this.birthDay = ref; }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            phone
                        </Col>
                        <Col sm={4}>
                            <FormControl
                                type="text"
                                placeholder="Enter phone"
                                inputRef={ref => { this.phone = ref; }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            email
                        </Col>
                        <Col sm={4}>
                            <FormControl
                                type="text"
                                placeholder="Enter email"
                                inputRef={ref => { this.email = ref; }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            address
                        </Col>
                        <Col sm={4}>
                            <FormControl
                                type="text"
                                placeholder="Enter address"
                                inputRef={ref => { this.address = ref; }}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            description
                        </Col>
                        <Col sm={4}>
                            <FormControl
                                componentClass="textarea"
                                placeholder="Enter description"
                                inputRef={ref => { this.description = ref; }}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={4}>
                            <Button type="submit">
                                ADD
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (newUser) => dispatch(addUser(newUser))
    }
};

const mapStateToProps = (state) => {
    return {
        newUser: state.addUser.newUser,
        success: state.addUser.success
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);