import { GET_USERS_REQUEST, GET_USERS_RESPONSE, GET_USERS_FAIL } from '../constants/actionTypes';
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
