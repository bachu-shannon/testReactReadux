import { GET_USERS_REQUEST, GET_USERS_RESPONSE, GET_USERS_FAIL } from '../constants/actionTypes';

const initialState = [];

export default function getUsers(state = initialState, action) {
    switch(action.type) {
        case GET_USERS_REQUEST:
            return state;
        case GET_USERS_RESPONSE:
            return action.payload.users;
        case GET_USERS_FAIL:
            return state;
        default:
            return state;
    }
}