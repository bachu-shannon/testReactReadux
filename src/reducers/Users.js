import { GET_USERS_REQUEST, GET_USERS_RESPONSE, GET_USERS_FAIL } from '../constants/actionTypes';

const initialState = {
    users: [],
    failure: false
};

export default function getUsers(state = initialState, action) {
    switch(action.type) {
        case GET_USERS_REQUEST:
            return state;
        case GET_USERS_RESPONSE:
            return {
                ...state,
                ...action.payload
            };
        case GET_USERS_FAIL:
            return {
                failure: action.payload.failure
            };
        default:
            return state;
    }
}