import { GET_USERS_REQUEST, GET_USERS_RESPONSE, GET_USERS_FAIL, ADD_USER } from '../constants/actionTypes';
import axios from 'axios';

function getUsersRequest() {
    return {
        type: GET_USERS_REQUEST,
        payload: {}
    }
}

function getUsersResponse(data) {
    return {
        type: GET_USERS_RESPONSE,
        payload: {
            users: data
        }
    }
}

export function getUsers(name, start=0, limit=50) {
    return dispatch => {
        dispatch(getUsersRequest());
		axios.get('http://api.demo.lakmus.org/api/clients/', {
                params: {
                    _start: start,
                    _limit: limit,
                    name: name
                }
            })
            .then((response) => {
				return response.data;
            })
            .then((data) => {
                dispatch(getUsersResponse(data));
            });
    }
}

export function setUser(newUser) {
    return {
        type: ADD_USER,
        payload: {
            newUser: newUser,
            success: "Успешно добавлен"
        }
    }
}

export function addUser(newUser) {
    return dispatch => {
        dispatch(setUser(newUser));
        axios.post('http://api.demo.lakmus.org/api/clients/', {
            params: {
                name: newUser.name,
                gender: newUser.gender,
                birthYear: newUser.birthYear,
                birthMonth: newUser.birthMonth,
                birthDay: newUser.birthDay,
                phone: newUser.phone,
                email: newUser.email,
                address: newUser.address,
                description: newUser.description,
            }
        })
            .then((response) => {
                console.log("Success:" + response);
            })
            .then((error) => {
                console.log(error);
            })
    }
}
